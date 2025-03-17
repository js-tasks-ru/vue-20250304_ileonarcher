import { defineComponent , computed } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true
    },

    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: Infinity
    }
  },

  emits: ['update:count'],

  setup(props, {emit}) {
    const decrementDisable = computed(() => props.count <= props.min)
    const IncrementDisable = computed(() => props.count >= props.max)

    function updateCount (value) {
      emit('update:count', value)
    }
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    return {
      decrementDisable,
      IncrementDisable,
      updateCount
    } 
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="decrementDisable" @click.stop="updateCount(count - 1)">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="IncrementDisable" @click.stop="updateCount(count + 1)">➕</UiButton>
    </div>
  `,
})
