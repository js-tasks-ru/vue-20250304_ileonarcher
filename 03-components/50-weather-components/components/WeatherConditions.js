import { defineComponent } from 'vue'
import { WeatherConditionIcons } from '..//weather.service.ts'

export default defineComponent({
  name: 'WeatherConditions',

  props: {
    weatherDescription: String,
    weatherId: Number,
    currentTemp: Number,
  },

  setup() {
    const icons = WeatherConditionIcons

    return {
      icons,
    }
  },

  template: `
    <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="weatherDescription">{{ icons[weatherId] }}</div>
        <div class="weather-conditions__temp">{{ (Math.round((currentTemp - 273.15) * 10) / 10).toFixed(1)}} °C</div>
    </div>
  `,
})
