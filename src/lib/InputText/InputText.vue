<script setup lang="ts">
import type { InputTextProps } from './InputType.types';

const inputProps = defineProps<InputTextProps>();
</script>

<template>
  <input type="text" v-bind="inputProps"/>
</template>
