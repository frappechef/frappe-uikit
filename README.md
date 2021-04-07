#  Frappe Finance UIkit

[![Version](https://img.shields.io/npm/v/@frappefinance-libs/uikit)](https://www.npmjs.com/package/@frappefinance-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@frappefinance-libs/uikit)](https://www.npmjs.com/package/@frappefinance-libs/uikit)

Frappe UIkit is a set of React components and hooks used to build pages on Frappe's apps.

It also contains a theme file for dark and light mode.

## Install

`yarn add @frappefinance-libs/uikit`

## npm

https://www.npmjs.com/package/@frappefinance-libs/uikit

## Setup

### Theme

Before using Frappe UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@frappefinance-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@frappefinance-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://frappefinance.github.io/frappe-uikit/)
