<template>
     <!-- <h1>{{ $t('title.config') }}</h1> -->
    <select class="App-language" v-model="locale">
      <option
        v-for="optionLocale in supportLocales"
        :key="`locale-${optionLocale.name}`"
        :value="optionLocale.name">{{ optionLocale.flag }}
      </option>
    </select>
</template>

<script>
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '@/i18n';

    export default {
        name: "LangSelector",
        data() {
            return {
                locale: this.$i18n.locale,
            }
        },
        created() {
            this.supportLocales = supportLocales

        },
        watch: {
            locale() {
                setI18nLanguage(this.locale)
            }
        }
    }
</script>

<style scoped>

</style>



// const loadedLanguages = ['en'] // our default language that is preloaded

// function setI18nLanguage (lang) {
//   i18n.locale = lang
//   axios.defaults.headers.common['Accept-Language'] = lang
//   document.querySelector('html').setAttribute('lang', lang)
//   return lang
// }

//  function loadLanguageAsync(lang) {
//   // If the same language
//   if (i18n.locale === lang) {
//     return Promise.resolve(setI18nLanguage(lang))
//   }

//   // If the language was already loaded
//   if (loadedLanguages.includes(lang)) {
//     return Promise.resolve(setI18nLanguage(lang))
//   }

//   // If the language hasn't been loaded yet
//   return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.js`).then(
//     messages => {
//       i18n.setLocaleMessage(lang, messages.default)
//       loadedLanguages.push(lang)
//       return setI18nLanguage(lang)
//     }
//   )
// }