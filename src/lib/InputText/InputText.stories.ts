import type { Meta, StoryObj } from '@storybook/vue3-vite';

import InputText from './InputText.vue';

const meta = {
  args: {
    min: 0,
    max: 26,
    placeholder: 'Nom',
    required: false,
    value: '',
  },
  component: InputText,
  tags: ['autodocs'],
  title: 'Components/InputText',
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
