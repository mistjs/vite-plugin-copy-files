# vite-plugin-copy-files

这个包能帮助你将一些不需要打包的文件移动到对应的打包目录的位置。

## 安装

```shell
# npm
npm i -D vite-plugin-copy-files
# pnpm 
pnpm add -D vite-plugin-copy-files
# yarn
yarn add -D vite-plugin-copy-files

```

## 使用

在项目中的`vite.config.js`或者`ts`中配置如下：


```ts
import copyFiles from 'vite-plugin-copy-files'
export default {
  plugins: [copyFiles({
      include:[/\.(less|css|scss)$/],
      exclde:[/node_modules/],
  })]
}
```


## 参数

### include

- `Array`: 支持正则和字符串，默认为`[/\.(less|css|scss)$/]`

### exclude

- `Array`: 支持正则和字符串，默认为`[/node_modules/]`

### root

- `String`: 源文件的根目录，默认跟随`vite`的配置文件中的`root`配置项。

### entry

- `String`: 设置需要复制文件的目录，默认为`src`；如果您的默认目录不是`src`，请根据需要自行调整。
