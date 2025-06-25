<script lang="ts" setup>
import { type ButtonTextProps } from './MyButton.types';

const buttonProps = defineProps<ButtonTextProps>();
</script>

<template>
  <button type="button" v-bind="buttonProps">
    <slot></slot>
  </button>
</template>
