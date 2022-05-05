import { resolve } from 'path'
import { normalizePath } from 'vite'
import type { PluginOption } from 'vite'
import { createFilter } from '@rollup/pluginutils'
import type { FilterPattern } from '@rollup/pluginutils'
import type { ConfigOptions } from './typing'

const LessCopy = (_opt: ConfigOptions): PluginOption => {
  const maps = new Map<string, string>()
  const root = _opt.root || process.cwd()
  const entry = _opt.entry || 'src'
  const sourceDir = normalizePath(resolve(root, entry))
  const include: FilterPattern = _opt.include || [/\.(less|scss|css)$/]
  const exclude: FilterPattern = _opt.exclude || [/node_modules/]
  return {
    name: 'vite-plugin-copy-files',
    enforce: 'pre',
    transform(code: string, id: string) {
      const filter = createFilter(include, exclude)
      if (!filter(id))
        return
      // TODO
      maps.set(id, code)
    },
  }
}

export default LessCopy
