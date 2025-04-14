# React + TypeScript + Vite

Базовая настройка React + TypeScript + Vite + Prettier + ESLint + Airbnb Style Guide по [статье](https://medium.com/@gadharinayan/setting-up-eslint-prettier-and-airbnb-style-guide-in-react-18-with-typescript-a-deep-dive-4b0aadaf9b97)

После установки и настройки по статье появились 2 ошибки:

- Referenced project `'d:/proj-01/react-ts-prettier-airbnb-eslint-setup/tsconfig.node.json' must have setting "composite": true`.
- Referenced project `'d:/proj-01/react-ts-prettier-airbnb-eslint-setup/tsconfig.node.json' may not disable emit`.

Были исправлены добавлением в `tsconfig.node.json`:

```
    "composite": true,
    "outDir": "./dist", // Указываем папку для выходных файлов
    "declaration": true, // Генерировать .d.ts

    // "noEmit": true, // Комментируем чтобы не видеть ошибку. но указываем outDir, declaration

```

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
