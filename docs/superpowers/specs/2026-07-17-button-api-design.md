# FabricMind Button API 完善设计

## 目标

将 Vue 生产包中的 `Button` 从落地页抽取样式升级为可稳定发布和复用的基础组件，同时保留现有 `variant`、`size` 和 `icon` 插槽调用方式。

本轮只修改 Vue 生产组件，不同步 React 展示镜像。新增 Vue Button 独立展示页，供设计和开发人员查看全部状态。

## 公共 API

```ts
export type ButtonVariant = 'primary' | 'ghost' | 'nav'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  type?: ButtonType
  href?: string
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  block?: boolean
}
```

默认值：

- `variant`: `primary`
- `size`: `md`
- `type`: `button`
- `disabled`: `false`
- `loading`: `false`
- `block`: `false`

插槽：

- default：按钮文本或主要内容。
- `leading-icon`：前置图标。
- `trailing-icon`：后置图标。
- `icon`：旧的尾部图标插槽，作为 `trailing-icon` 的兼容别名继续支持。

组件从公共入口额外导出 `ButtonProps`、`ButtonVariant`、`ButtonSize` 和 `ButtonType` 类型。

这些类型定义在 `src/components/ui/button.types.ts`，由 `Button.vue` 和 `src/index.ts` 共同导入，避免在 `<script setup>` 内声明模块导出。

## 元素语义

- 未传 `href` 时渲染原生 `<button>`。
- 传入 `href` 时渲染原生 `<a>`。
- button 模式绑定 `type` 和原生 `disabled`。
- link 模式允许 Vue 的 `$attrs` 透传 `target`、`rel`、`download` 等标准属性。
- disabled 或 loading 的 link 移除 `href`，设置 `aria-disabled="true"` 和 `tabindex="-1"`。
- disabled 或 loading 状态阻止 click 事件继续传播，也阻止链接导航。
- 正常状态的 click 事件保持原生事件对象，并通过组件 `click` 事件对外发出。

## Loading 行为

- loading 时设置 `aria-busy="true"`。
- 使用 `lucide-vue-next` 的 `LoaderCircle`，线宽 1.75，并应用旋转动画。
- spinner 占据前置图标位置，避免按钮宽高跳动。
- 提供 `loadingText` 时，用它替换默认插槽的可见文本；未提供时保留原文本。
- loading 状态与 disabled 状态使用相同的交互阻断规则。
- `lucide-vue-next` 加入组件包 peer dependencies，并在 library build 中 externalize。

## 样式与状态

继续使用 FabricMind 胶囊按钮造型与现有三种 variant，不新增颜色变体。

- `block` 增加 `w-full justify-center`。
- 所有按钮显式增加 `justify-center`，保证 loading 和图标布局稳定。
- keyboard focus 使用 azure 轮廓和 offset，在明暗主题下均可见。
- disabled/loading 使用较低不透明度和 `cursor-not-allowed`。
- disabled/loading 禁止 hover 位移、背景强化和 glow。
- 所有状态保持当前 sm、md、lg 的固定内边距与字号。
- 图标尺寸：sm 为 14px，md/lg 为 16px。

## 展示页面

增加开发专用入口：

```text
templates/vue-package/button-preview.html
templates/vue-package/src/previews/button-main.ts
templates/vue-package/src/previews/ButtonPreview.vue
```

访问地址为 `http://localhost:5173/button-preview.html`。页面包含：

- primary、ghost、nav 三种变体。
- sm、md、lg 三种尺寸。
- 无图标、前置图标、后置图标和兼容 `icon` 插槽。
- normal、loading、disabled 状态。
- button、submit、link 语义。
- block 宽度。
- 暗色/浅色主题切换。

该 HTML 不加入 library build 入口，不出现在 npm 发布包中。现有落地页 `index.html` 与 `npm run build` 行为保持不变。

## 测试

使用 Vitest、Vue Test Utils 和 happy-dom 增加 `Button.spec.ts`，覆盖：

1. 默认渲染 `<button type="button">`。
2. `type="submit"` 正确透传。
3. `href` 渲染 `<a>`。
4. 正常 click 对外发出一次。
5. disabled button 不发出 click。
6. disabled link 没有 href，并具有正确 ARIA 与 tabindex。
7. loading 设置 `aria-busy`、展示 spinner，并阻止 click。
8. `loadingText` 替换可见文本。
9. `block` 和 variant/size 输出预期状态类。
10. 新旧图标插槽都可以渲染。

浏览器验证展示页：页面非空、无框架错误、控制台无错误；切换明暗主题；检查桌面与移动视口无文字溢出或控件重叠。

## 包与兼容性

- `Button` 默认用法和现有三种视觉变体保持兼容。
- 保留旧 `icon` 插槽，下一主版本前不移除。
- `lucide-vue-next` 从纯开发依赖变成 peer dependency，同时继续保留开发依赖。
- 公共类型从 `src/index.ts` 导出并由现有声明构建生成。
- `verify:package` 继续验证 ESM、CSS、类型声明与最小消费者导入。

## 非目标

- 不新增 destructive、secondary 等视觉变体。
- 不支持任意 `as` 组件或 RouterLink。
- 不修改 `IconButton`。
- 不同步 React 镜像。
- 不在本轮发布到远程 registry。

