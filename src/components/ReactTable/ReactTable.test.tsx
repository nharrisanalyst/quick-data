import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactTable from './';

describe('these are unit test for the <ReactTable />', ()=>{
    it('renders without crashing', ()=>{
      render(<ReactTable/>)
      const renderTable = screen.getByTestId('react-table');
      expect(renderTable).toBeInTheDocument()
    })
})