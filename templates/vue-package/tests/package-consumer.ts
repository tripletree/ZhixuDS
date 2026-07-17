import type { Component } from 'vue'
import {
  BrandMark,
  Button,
  CountUp,
  IconButton,
  Reveal,
  SectionHeading,
  useContactDialog,
  useTheme,
  type Theme,
} from '@zhixu/fabricmind-ui'

const components: Component[] = [
  BrandMark,
  Button,
  CountUp,
  IconButton,
  Reveal,
  SectionHeading,
]

const theme: Theme = 'dark'
const themeApi = useTheme()
const contactDialogApi = useContactDialog()

void components
void theme
void themeApi
void contactDialogApi
