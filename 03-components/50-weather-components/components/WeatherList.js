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
    function isNight(city) {
      return !(city.current.dt > city.current.sunrise && city.current.dt < city.current.sunset)
    }

    return {
      isNight,
      WeatherCard,
    }
  },

  template: `
    <ul class="weather-list unstyled-list">
      <li v-for="city in weatherData" class='weather-card' :class="{'weather-card--night': isNight(city)}">
        <WeatherCard :city/>
      </li>
    </ul>
  `,
})
