import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactTable from './';

const originalConsoleError = console.error;
const jsDomCssError = "Error: Could not parse CSS stylesheet";
console.error = (...params) => {
  if (!params.find((p) => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params);
  }
};

describe('these are unit test for the <ReactTable />', ()=>{
    it('renders without crashing', ()=>{
      render(<ReactTable/>)
      const renderTable = screen.getByTestId('react-table');
      expect(renderTable).toBeInTheDocument()
    })

    it('<ReactTable /> renders all the JSON Keys as headers', ()=>{
      const testData = [{
        "name":"nathan",
        "age":"29",
        "sex":"male"
      }]

      const props = {data: testData}
      
          render(<ReactTable {...props} />)
          const header_1 = screen.getByText("name")
          const header_2 = screen.getByText("age")
          const header_3 = screen.getByText("sex")
          expect(header_1).toBeInTheDocument()
          expect(header_2).toBeInTheDocument()
          expect(header_3).toBeInTheDocument()
          const data_1 = screen.getByText("nathan")
          const data_2 = screen.getByText("29")
          const data_3 = screen.getByText("male")
          expect(data_1).toBeInTheDocument()
          expect(data_2).toBeInTheDocument()
          expect(data_3).toBeInTheDocument()
    })


})