import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    let number = ref(0)

    let minusDisable = computed(() => {
      if (number.value <= 0) {
        return true;
      } else {
        return false;
    }});

    let plusDisable = computed(() => {
      if (number.value >= 5) {
        return true;
      } else {
        return false;
    }});

    return {
      number,
      minusDisable,
      plusDisable
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="minusDisable"
        @click="number--"
      >➖</button>

      <span class="count" data-testid="count">{{ number }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="plusDisable"
        @click="number++"
      >➕</button>
    </div>
  `,
})
