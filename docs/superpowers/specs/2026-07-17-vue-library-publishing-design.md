# FabricMind Vue 组件库发布结构设计

## 目标

将 `templates/vue-package` 从单一 Vite 落地页应用扩展为可被其他 Vue 3 项目安装和按需导入的组件包，同时保留现有落地页开发与构建流程。

预期消费方式：

```ts
import { Button, IconButton } from '@zhixu/fabricmind-ui'
import '@zhixu/fabricmind-ui/style.css'
```

## 本轮范围

- 新增公共 TypeScript 导出入口。
- 新增独立的 Vite library mode 构建配置。
- 输出 ESM JavaScript、Vue 类型声明和独立 CSS。
- 配置标准 `exports`、`files`、`main`、`module` 与 `types` 字段。
- 将运行时框架依赖声明为 peer dependencies，并保留开发依赖用于本仓库预览。
- 保留现有 `npm run dev` 与落地页构建。
- 新增库构建脚本与最小消费验证。

本轮不新增组件、不修改现有组件 API、不引入 Storybook，也不发布到远程 registry。

## 目录与入口

```text
templates/vue-package/
├─ src/
│  ├─ index.ts                 # 公共组件与 composable 导出
│  └─ style.css                # 公共样式入口
├─ vite.config.ts              # 现有落地页配置
├─ vite.lib.config.ts          # 组件库构建配置
├─ tsconfig.lib.json           # 公共入口的声明生成配置
└─ dist-lib/                   # 可发布产物
```

第一版公共 API 导出：

- `BrandMark`
- `Button`
- `IconButton`
- `SectionHeading`
- `Reveal`
- `CountUp`
- `useTheme`
- `useContactDialog`
- `Theme` 类型

落地页区块和 `visuals` 产品模型不进入公共 API。它们属于站点组合层，而非稳定的通用组件契约。

## 包与依赖边界

包使用面向 npm 的标准结构，但在首次验证阶段保留 `private: true`，避免误发布。

- `vue`：peer dependency，同时保留为开发依赖。
- `motion-v`：peer dependency，因为公开的 `Reveal` 依赖它。
- `lucide-vue-next`：暂不设为 peer dependency。当前公共 UI 原语不直接导入该包；图标通过 slot 传入。
- `motion-dom` 与 `motion-utils`：保留锁定的开发依赖，确保当前 `motion-v` 构建兼容。

`exports` 至少提供：

- `.`：ESM 与类型声明入口。
- `./style.css`：构建后的公共 CSS。
- `./package.json`：供工具读取包元数据。

## 构建产物

库构建使用独立配置，避免影响落地页：

- 入口：`src/index.ts`
- 格式：ESM
- 外部化：`vue`、`motion-v`
- CSS：独立输出，不内联进 JavaScript
- 输出目录：`dist-lib`
- 每次构建清理旧产物

类型声明通过 `vue-tsc -p tsconfig.lib.json --declaration --emitDeclarationOnly` 输出，不增加声明生成插件。`tsconfig.lib.json` 只包含公共入口及其依赖，避免把落地页区块暴露到包类型中。最终产物必须包含可被 TypeScript 消费者解析的 `.d.ts` 文件。

## 脚本

- `npm run dev`：继续启动落地页。
- `npm run build`：继续构建落地页。
- `npm run build:lib`：类型检查并生成 `dist-lib`。
- `npm run typecheck`：检查 Vue 与 TypeScript 源码。
- `npm run verify:package`：检查打包文件列表，并以最小消费者导入公共入口和 CSS。

## 验证标准

1. 现有落地页生产构建继续通过。
2. `build:lib` 生成 JavaScript、CSS 和类型声明。
3. `npm pack --dry-run` 仅包含计划发布的产物、README 和 package metadata；许可证待所有者明确授权后单独补充。
4. 最小 Vue 消费示例可以导入 `Button` 和公共 CSS并通过类型检查与构建。
5. 公共产物不内嵌 Vue 或 motion-v。
6. 暗色与浅色令牌行为保持不变。

## 错误与兼容策略

- 构建配置不会吞掉类型错误；任何声明生成失败都使 `build:lib` 失败。
- peer dependency 使用与当前实现兼容的主版本范围，避免消费者安装重复 Vue 实例。
- 保留现有依赖兼容锁定，直到后续单独升级 motion 技术栈。
- 不改变组件 DOM、样式或交互，因此本轮视觉回归风险较低。

## 后续阶段

发布骨架验证后，再进入组件 API 加固和新组件开发。下一批候选为 Button、Input、Select、Dialog 与 Tabs，但不属于本设计的实施范围。



