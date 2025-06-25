import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';

import MyButton from './MyButton.vue';

const meta = {
  args: { onClick: fn() },
  component: MyButton,
  parameters: {
    slots: {
      default: {
        description: 'Custom Label',
        template: `<p>{{ args.default }}</p>`,
      },
    },
  },
  tags: ['autodocs'],
  title: 'Components/MyButton',
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'Button',
  },
};
