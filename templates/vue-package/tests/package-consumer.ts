import type { Component } from 'vue'
import {
  AlphabetIndex,
  BrandMark,
  Button,
  Checkbox,
  CheckboxGroup,
  Collapse,
  CountUp,
  DataTable,
  DateRangeEditor,
  Dialog,
  DropdownMenu,
  EmptyState,
  Fab,
  Field,
  FilterChips,
  IconButton,
  Input,
  Listbox,
  Pagination,
  Panel,
  Popover,
  ProductCard,
  Progress,
  Radio,
  RadioGroup,
  Reveal,
  SectionHeading,
  Select,
  SparkBars,
  Sparkline,
  Stat,
  StatusDot,
  Tabs,
  Tag,
  TextArea,
  ThumbnailStrip,
  Toast,
  ToastHost,
  Tooltip,
  useContactDialog,
  useTheme,
  useToast,
  type CheckOption,
  type ChipOption,
  type DataColumn,
  type DataRow,
  type ListboxOption,
  type MenuItem,
  type RadioOption,
  type TabItem,
  type Theme,
  type ThumbItem,
  type ToastItem,
} from '@zhixu/fabricmind-ui'

const components: Component[] = [
  AlphabetIndex,
  BrandMark,
  Button,
  Checkbox,
  CheckboxGroup,
  Collapse,
  CountUp,
  DataTable,
  DateRangeEditor,
  Dialog,
  DropdownMenu,
  EmptyState,
  Fab,
  Field,
  FilterChips,
  IconButton,
  Input,
  Listbox,
  Pagination,
  Panel,
  Popover,
  ProductCard,
  Progress,
  Radio,
  RadioGroup,
  Reveal,
  SectionHeading,
  Select,
  SparkBars,
  Sparkline,
  Stat,
  StatusDot,
  Tabs,
  Tag,
  TextArea,
  ThumbnailStrip,
  Toast,
  ToastHost,
  Tooltip,
]

const theme: Theme = 'dark'
const themeApi = useTheme()
const contactDialogApi = useContactDialog()
const toastApi = useToast()
const toastItems: ToastItem[] = [{ id: 1, tone: 'success', title: '已导出 PPT 提案' }]

const listboxOptions: ListboxOption[] = [{ value: 'trend', label: '趋势研究', hint: 'Trend' }]
const chips: ChipOption[] = [{ value: 'tshirt', label: 'T恤' }]
const checks: CheckOption[] = [{ value: 'brand-a', label: '& Other Stories' }]
const radios: RadioOption[] = [{ value: 'week', label: '前一周' }]
const tabs: TabItem[] = [{ key: 'trend', label: '趋势' }]
const menu: MenuItem[] = [{ key: 'export', label: '导出' }, { type: 'divider' }]
const columns: DataColumn[] = [{ key: 'name', label: '名称', strong: true }]
const rows: DataRow[] = [{ name: 'Lyocell' }]
const thumbs: ThumbItem[] = [{ src: '', alt: '' }]

void components
void theme
void themeApi
void contactDialogApi
void toastApi
void toastItems
void listboxOptions
void chips
void checks
void radios
void tabs
void menu
void columns
void rows
void thumbs
