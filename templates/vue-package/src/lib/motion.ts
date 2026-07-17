import { Motion as RawMotion, AnimatePresence as RawAnimatePresence } from 'motion-v'
import type { DefineComponent } from 'vue'

/**
 * motion-v ships `Motion` as a generic function component. vue-tsc cannot infer
 * its prop types from template usage (the `as`/generic param collapses to
 * `never`), producing false-positive template errors. We re-expose it with a
 * permissive prop signature — runtime behaviour is unchanged.
 */
export const Motion = RawMotion as unknown as DefineComponent<Record<string, unknown>>
export const AnimatePresence = RawAnimatePresence as unknown as DefineComponent<Record<string, unknown>>
