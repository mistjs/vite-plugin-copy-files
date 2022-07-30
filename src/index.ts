import { resolve } from 'path'
import { normalizePath } from 'vite'
import type { PluginOption } from 'vite'
import { createFilter } from '@rollup/pluginutils'
import type { FilterPattern } from '@rollup/pluginutils'
import type { ConfigOptions } from './typing'

const copyFiles = (_opt?: ConfigOptions): PluginOption => {
  const maps = new Map<string, string>()
  let root = _opt?.root || process.cwd()
  const entry = _opt?.entry || 'src'
  let sourceDir = normalizePath(resolve(root, entry))
  const include: FilterPattern = _opt?.include || [/\.(less|scss|css)$/]
  const exclude: FilterPattern = _opt?.exclude || [/node_modules/]
  return {
    name: 'vite-plugin-copy-files',
    enforce: 'pre',
    apply: 'build',
    configResolved: (config) => {
      root = _opt?.root || config.root || process.cwd()
      sourceDir = normalizePath(resolve(root, entry))
    },
    transform(code: string, id: string) {
      const filter = createFilter(include, exclude)
      if (!filter(id))
        return
      maps.set(id, code)
      return code
    },
    generateBundle() {
      maps.forEach((code, id) => {
        // 获取目录的信息
        let filename = id.replace(sourceDir, '').substring(1)
        filename = _opt?.formatFilePath?.(filename) || filename
        this.emitFile({
          type: 'asset',
          fileName: filename,
          source: code,
        })
      })
    },
  }
}

export default copyFiles
