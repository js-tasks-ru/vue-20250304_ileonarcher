import { defineComponent, onBeforeUnmount, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const clockElement = ref(null);
    function startClock() {
      
      const formatter = new Intl.DateTimeFormat('en', {
          timeStyle: 'medium'
      });
  
      function updateClock() {
          const now = new Date();
          clockElement.value = formatter.format(now);
      }
  
      updateClock();
  
      const intervalId = setInterval(updateClock, 1000);
  
      return function stopClock() {
          clearInterval(intervalId);
      };
  }

  const stopClock = startClock();
  
  onBeforeUnmount(() => {
    stopClock()
  })
  return {
    clockElement,
  }
  
  },

  template: `<div class="clock">{{ clockElement }}</div>`,
})
