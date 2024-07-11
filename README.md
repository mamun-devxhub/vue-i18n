# @dxh/vue-i18n

Install I18n to vue3 using dxh wrapper

## Uses

### Installation

Just use the below command to install Vue I18n.

```sh
npm i @mdxh/vue-i18n@latest
```

### Install the vue-i18n via app.use()

Create a vue-i18n instance and pass it to the app as a plugin:

```sh
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
  // something vue-i18n options here ...
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
```

### Start your project

```sh
npm run dev
```

## I18n Documentation

See [I18n Documentation](https://vue-i18n.intlify.dev).
