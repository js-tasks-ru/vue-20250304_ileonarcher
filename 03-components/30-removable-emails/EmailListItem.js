import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },

    index: {
      type: Number,
      required: true,
    },

    deleteIndex: {
      type: Function,
      required: true,
    },
  },

  emits: ['delete'],

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click.stop="$emit('delete')">❌</button>
    </li>
  `,
})
