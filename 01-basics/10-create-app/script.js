import { defineComponent, createApp } from 'vue'

const app = createApp(
  defineComponent({
    name: 'App',

    setup() {
      function formatAsLocalDate(timestamp) {
        return new Date(timestamp).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }
      return {
        formatAsLocalDate,
      }
    },

    template: `
        <div>Сегодня {{ formatAsLocalDate(new Date) }}</div>
    `,
  }),
)

app.mount('#app')
