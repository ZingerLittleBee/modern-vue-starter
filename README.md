Language : 🇺🇸 English | 🇨🇳 [简体中文](./README.zh-CN.md)

<h1 align="center">
  <img src="header.svg" width="400" height="200"></img>
</h1>
<div align="center">

  ![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
  [![GitHub Actions CI](https://img.shields.io/github/workflow/status/ZingerLittleBee/modern-vue-starter/Test%20CI?style=flat-square)](https://github.com/ZingerLittleBee/modern-vue-starter/actions)
  ![License](https://img.shields.io/github/license/ZingerLittleBee/modern-vue-starter?style=flat-square)

</div>

## Overview
`modern-vue-starter` is a modern Vue engineering template

## Features
- Fast (`Vite`)
- Small (`Rollup`, `Cssnano`)
- Standardize (`Eslint`, `Stylelint`, `Commitlint`)
- Automation (`Prettier`, `Husky`)
- Thousands of icons support (`Unplugin-Icons`, `Iconify`)
- Unit test (`Vitest`)
- CI/CD (`Github Action`)

## Prerequisites
- `Node.js` (>= 14 required, LTS preferred)

- `npm` (>= 6.x) or `yarn` (>= 1.22) or `pnpm` (preferred)

- `Git` (>= 2.0)

## Modules
`dependencies`
- vue 3

`devDependencies`
- `typescript`
- `vite` (Bundless build tools)
- `tailwindcss` (Atomic CSS)
- `unplugin-icons` (icons plugin)
- `vitest` (Vite unit test)
- `eslint` (Grammar lint)
- `prettier` (Code style check and repair)
- `lint-staged` (Staged files lint)
- `stylelint` (CSS lint)
- `husky` (Git hooks)
- `commitlint` (Commit lint)

## How to use
```bash
git clone https://github.com/ZingerLittleBee/modern-vue-starter.git my-project
cd my-project
pnpm i
```

### Import icon
Find icon what you want in [iconify](https://icon-sets.iconify.design/)
```typescript
// such as `mdi:ab-testing`
import TestIcon from '~icons/mdi/ab-testing'
```
[Read More](https://github.com/antfu/unplugin-icons)

### VSCode Settings
```js
// Unknown at rule, https://github.com/microsoft/vscode/issues/103163
css.lint.unknownAtRules: ignore
```

### Commit
```bash
pnpm cz
```

## Recommended Use (But not introduced)
- [daisyUI](https://github.com/saadeghi/daisyui)
  - Beautiful `tailwindcss` component library
- [axios](https://axios-http.com/)
  - Http request library
- [pinia](https://pinia.vuejs.org/)
  - Official store library, in fact Vuex 5
- [Vue Router](https://router.vuejs.org/zh/)
  - Official route
- [vueuse](https://vueuse.org/)
  - Vue hooks
- [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)
  - Provides Vue 3 JSX & TSX support with HMR
