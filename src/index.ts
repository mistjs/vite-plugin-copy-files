import type { PluginOption } from 'vite'
import type { LessCopyOptions } from './typing'

const LessCopy = (_opt: LessCopyOptions): PluginOption => {
  return {
    name: 'vite-plugin-less-copy',
  }
}

export default LessCopy;
