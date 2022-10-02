import Vue from "vue/dist/vue.js";
import GetTextPlugin from 'vue-gettext';
import translations from '../i18n/translations.json';

Vue.use(GetTextPlugin, {
  availableLanguages: {
    en_GB: 'British English',
    it_IT: 'Italiano',
  },
  defaultLanguage: 'en_GB',
  languageVmMixin: {
    computed: {
      currentKebabCase: function () {
        return this.current.toLowerCase().replace('_', '-')
      },
    },
  },
  translations: translations
})

let app = new Vue({
    el: '#page',
    data: {
      isDark: false
    },
    mounted: function() {
      console.log(`the component is now mounted.`)
    },
    methods: {
      toggleLight: function() {
        this.isDark = !this.isDark;
        document.getElementById("h24").setAttribute("data-icon",
            this.isDark ? 'sun' : 'moon');
      }
    }
})
