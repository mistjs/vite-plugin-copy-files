import { resolve } from 'path'
import { normalizePath } from 'vite'
import type { PluginOption } from 'vite'
import type { LessCopyOptions } from './typing'
import { FilterPattern } from "@rollup/pluginutils";

const LessCopy = (_opt: LessCopyOptions): PluginOption => {
  const maps = new Map<string, string>()
  const root = _opt.root || process.cwd()
  const entry = _opt.entry || 'src'
  const sourceDir = normalizePath(resolve(root, entry))
  // const exclude =
  return {
    name: 'vite-plugin-less-copy',
    enforce:"pre",
    transform(code: string, id: string, options?: { ssr?: boolean }) {
      if(!id.endsWith('.less') || ){

      }
    }
  }
}

export default LessCopy
