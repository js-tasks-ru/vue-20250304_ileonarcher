import { defineComponent } from 'vue'
import WeatherAlert from './WeatherAlert'
import WeatherDetails from './WeatherDetails'
import WeatherConditions from './WeatherConditions'

export default defineComponent({
  name: 'WeatherCard',

  components: {
    WeatherAlert,
    WeatherDetails,
    WeatherConditions,
  },

  props: {
    city: {
      type: Object,
      required: true,
    },
  },

  template: `
    <WeatherAlert v-if="city.alert" :sender='city.alert.sender_name' :description='city.alert.description'/>
    <div>
        <h2 class="weather-card__name">
            {{ city.geographic_name }}
        </h2>
        <div class="weather-card__time">
            {{ city.current.dt }}
        </div>
    </div>
    <WeatherConditions :weatherDescription='city.current.weather.description' :weatherId='city.current.weather.id' :currentTemp='city.current.temp' />
    <WeatherDetails :pressure='city.current.pressure' :humidity='city.current.humidity' :clouds='city.current.clouds' :windSpeed='city.current.wind_speed' />
    `,
})
