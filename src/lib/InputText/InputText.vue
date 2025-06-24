<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputTextProps extends /* @vue-ignore */ InputHTMLAttributes {}
const { type = 'text' } = defineProps<InputTextProps>();
</script>

<template>
  <input :type="type" />
</template>
