import type { Meta, StoryObj } from '@storybook/react';
import QuickData from '.';

const meta: Meta<typeof QuickData> ={
    component:QuickData,
    title:'QuickData',
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary:Story ={
    args: {
        
      },
}