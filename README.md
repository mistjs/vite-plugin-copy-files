# vite-plugin-copy-files

This package can help you move some files that do not need to be packaged to the corresponding packaging directory.


## Install

```shell
# npm
npm i -D vite-plugin-copy-files
# pnpm 
pnpm add -D vite-plugin-copy-files
# yarn
yarn add -D vite-plugin-copy-files

```

## Usage

Add the following to your `.vite.config.js` or `.vite.config.ts` file:

```ts
import copyFiles from 'vite-plugin-copy-files'
export default {
  plugins: [copyFiles({
    include: [/\.(less|css|scss)$/],
    exclde: [/node_modules/],
  })],
}
```


## Options

### include

- `Array`: A list of patterns or string to include.

* default: `[/\.(less|css|scss)$/]`


### exclude

- `Array`: A list of patterns or string to exclude.

* default: `[/node_modules/]`

### root

- `String`: The root directory to copy files from.

* default: with vite config option `root`

### entry

- `String`: The entry directory to copy files from.

* default: `src` if you directory is not named `src` you need to specify the entry directory.


### formatFilePath

  - `Function`: A custom file output path Function. `(file:string)=>string`
