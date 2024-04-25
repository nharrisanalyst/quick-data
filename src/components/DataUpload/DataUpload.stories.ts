import type { Meta, StoryObj } from '@storybook/react';
import DataUpload from '.';

const meta: Meta<typeof DataUpload> ={
    component:DataUpload,
    title:'DataUpload',
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary:Story ={
    args: {
        
      },
}