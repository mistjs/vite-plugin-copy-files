import { resolve } from 'path'
import { describe, expect, it } from 'vitest'
import { normalizePath } from 'vite'
describe('info', () => {
  it('should return info', () => {
    expect(true).toBe(true)
  })
  it('test normalizePath', () => {
    expect(normalizePath(resolve(process.cwd(), './src/'))).toMatchInlineSnapshot('"C:/Users/Administrator/Desktop/git/vite-plugin-less-copy/src"')
    expect(normalizePath(resolve('./src/'))).toMatchInlineSnapshot('"C:/Users/Administrator/Desktop/git/vite-plugin-less-copy/src"')
    expect('C:/Users/Administrator/Desktop/git/vite-plugin-less-copy/src/info/index.less'
      .replace('C:/Users/Administrator/Desktop/git/vite-plugin-less-copy/src', '').substring(1))
      .toMatchInlineSnapshot('"info/index.less"')
  })
})
