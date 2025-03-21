import { defineComponent } from 'vue'
import WeatherCard from './WeatherCard'

export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherCard,
  },

  props: {
    weatherData: {
      type: Array,
      required: true,
    },
  },

  setup() {
    return {
      WeatherCard,
    }
  },

  template: `
    <ul class="weather-list unstyled-list">
        <WeatherCard v-for="city in weatherData" :city/>
    </ul>
  `,
})
