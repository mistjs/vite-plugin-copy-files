import type { FilterPattern } from '@rollup/pluginutils'

export interface ConfigOptions{
  root?: string
  entry?: string
  exclude?: FilterPattern
  include?: FilterPattern
}
