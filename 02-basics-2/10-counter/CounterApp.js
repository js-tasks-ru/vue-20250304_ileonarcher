import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    let number = ref(0)

    let minusDisable = ref(true);

    let plusDisable = ref(false);

    watch(number, (newNumber) => {
      if (newNumber <= 0) {
        minusDisable.value = true;
      } else if (newNumber >= 5) {
        plusDisable.value = true;
      } else {
        minusDisable.value = false;
        plusDisable.value = false;
      }
    })

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

      <span class="count" data-testid="count">{{number}}</span>

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
