import type { Meta, StoryObj } from '@storybook/react';
import ReactTable from '.';

const meta: Meta<typeof ReactTable> ={
    component:ReactTable,
    title:'ReactTable',
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary:Story ={
    args: {
        data:[{
            "name":"nathan",
            "age":"29",
            "sex":"male"
          }]
      },
}