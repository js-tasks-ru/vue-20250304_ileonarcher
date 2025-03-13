import { defineComponent, ref, onMounted, computed, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedMeetupId = ref(1)

    let previousDisable = computed(() => {
      if (selectedMeetupId.value <= 1) {
        return true
      } else {
        return false
      }
    })

    let nextDisable = computed(() => {
      if (selectedMeetupId.value >= 5) {
        return true
      } else {
        return false
      }
    })

    const currentMeetup = ref(null)

    const loadMeetup = async (id) => {
      try {
        currentMeetup.value = await getMeetup(id);
      } catch (error) {
        console.error('Ошибка при загрузке митапа:', error);
      }
    };

    onMounted(() => loadMeetup(selectedMeetupId.value));

    watch(selectedMeetupId, (newId) => {
      loadMeetup(newId);
    });

    return {
      selectedMeetupId,
      currentMeetup,
      previousDisable,
      nextDisable,
    }
  },

  template: `
    
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" :disabled="previousDisable" @click='selectedMeetupId--'>Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button">
            <input
              id="meetup-id-1"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="1"
              v-model='selectedMeetupId'
            />
            <label for="meetup-id-1" class="radio-group__label">1</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-2"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="2"
              v-model='selectedMeetupId'
            />
            <label for="meetup-id-2" class="radio-group__label">2</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-3"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="3"
              v-model='selectedMeetupId'
            />
            <label for="meetup-id-3" class="radio-group__label">3</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-4"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="4"
              v-model='selectedMeetupId'
            />
            <label for="meetup-id-4" class="radio-group__label">4</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-5"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="5"
              v-model='selectedMeetupId'
            />
            <label for="meetup-id-5" class="radio-group__label">5</label>
          </div>
        </div>

        <button class="button button--secondary" type="button" :disabled="nextDisable" @click='selectedMeetupId++'>Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <template v-if="currentMeetup !== null">
            <h1 class="meetup-cover__title">{{ currentMeetup.title }}</h1>
          </template>
        </div>
      </div>

    </div>
    
  `,
})
