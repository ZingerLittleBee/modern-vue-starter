Language : [🇺🇸 English](./README.md) | 🇨🇳 简体中文

<h1 align="center">
  <img src="header.svg" width="400" height="200"></img>
</h1>
<div align="center">

  ![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
  [![GitHub Actions CI](https://img.shields.io/github/workflow/status/ZingerLittleBee/modern-vue-starter/Test%20CI?style=flat-square)](https://github.com/ZingerLittleBee/modern-vue-starter/actions)
  ![License](https://img.shields.io/github/license/ZingerLittleBee/modern-vue-starter?style=flat-square)

</div>

## 简介
`modern-vue-starter` 是一个现代化的 vue 工程模版

## 特点
- 够快 (`Vite`)
- 够小 (`Rollup`, `Cssnano`)
- 规范化 (`Eslint`, `Stylelint`, `Commitlint`)
- 自动化 (`Prettier`, `Husky`)
- 上万图标支持 (`Unplugin-Icons`, `Iconify`)
- 单元测试支持 (`Vitest`)
- CI/CD (`Github Action`)

## 环境要求
- `Node.js` (>= 14 required, LTS preferred)

- `npm` (>= 6.x) or `yarn` (>= 1.22) or `pnpm` (preferred)

- `Git` (>= 2.0)

## 包含的模块
`dependencies`
- vue 3

`devDependencies`
- `typescript`
- `vite` (Bundless 构建工具)
- `tailwindcss` (原子化 CSS 框架)
- `unplugin-icons` (图标插件)
- `vitest` (Vite 单元测试框架)
- `eslint` (语法检查)
- `prettier` (代码风格检查修复)
- `lint-staged` (Git 暂存区内容 lint)
- `stylelint` (CSS 代码检查)
- `husky` (Git hooks)
- `commitlint` (Commit 提交 lint)

## 如何使用
```bash
git clone https://github.com/ZingerLittleBee/modern-vue-starter.git my-project
cd my-project
pnpm i
```

### 引入图标
在 [iconify](https://icon-sets.iconify.design/) 上查找图标
```typescript
// 例如 `mdi:ab-testing`
import TestIcon from '~icons/mdi/ab-testing'
```
[查看更多图标操作](https://github.com/antfu/unplugin-icons)

### VSCode 设置
```js
// Unknown at rule, https://github.com/microsoft/vscode/issues/103163
css.lint.unknownAtRules: ignore
```

### 提交 Commit
```bash
pnpm cz
```

## 推荐使用 (但并未引入)
- [daisyUI](https://github.com/saadeghi/daisyui)
  - 超好看的 `tailwindcss` 组件库
- [axios](https://axios-http.com/)
  - HTTP 请求库
- [pinia](https://pinia.vuejs.org/)
  - 官方状态库, 事实上的 Vuex 5
- [Vue Router](https://router.vuejs.org/zh/)
  - 官方路由
- [vueuse](https://vueuse.org/)
  - Vue hooks
- [babel-plugin-jsx](https://github.com/vuejs/babel-plugin-jsx)
  - 在 Vue 3 中使用 `JSX/TSX`
