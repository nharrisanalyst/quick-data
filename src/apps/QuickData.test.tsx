import {screen,render} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'
import QuickData from './';

//stops the production of an erroneous error
const originalConsoleError = console.error;
const jsDomCssError = "Error: Could not parse CSS stylesheet";
console.error = (...params) => {
  if (!params.find((p) => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params);
  }
};

describe('these are test for <QuickData />', ()=>{
    it('it loads without crashing', ()=>{
        render(<QuickData  />)
        const quickData = screen.getByTestId('quick-data-test-id');
        expect(quickData).toBeInTheDocument();
    })

    it('<QuickData /> contains the  <DataUpload /> component', ()=>{
        render(<QuickData  />)
        const dataUpload = screen.getByTestId("data-uploader")
        expect(dataUpload).toBeInTheDocument();
    })

    it('before data is loaded the table is not visible and the user is promted to upload data',()=>{
        render(<QuickData />)
        let renderTable = screen.queryByTestId('react-table');
        expect(renderTable).not.toBeInTheDocument();  //Testing that the table is not there intil data is uploaded
        let uploadDataText = screen.getByText('Upload Data To See The Data Table')
    })


    it('<QuickData/>  takes data => converts that data into JSON and shows that data in a chart', async ()=>{
        const user = userEvent.setup()
        const csvAsText = 
        `a,b,c,d
        1,2,3,4`;
        const fakeCSV = new File([csvAsText], 'hello.csv', {type: 'text/csv'})
        render(<QuickData />)
        const dataInput = screen.getByLabelText(/Upload Your Data/i) as HTMLInputElement;
        
        await act( async() => {
            await user.upload(dataInput, fakeCSV);
        })
        const uploadedMessage = screen.getByText('Your data has been Uploaded');
        expect(uploadedMessage).toBeInTheDocument(); //this test that the state has changed

        //the data table is showing and all the data is displayed

        const renderTable = screen.getByTestId('react-table');
        expect(renderTable).toBeInTheDocument()

        const header_1 = screen.getByText("a")
        const header_2 = screen.getByText("b")
        const header_3 = screen.getByText("c")
        const header_4 = screen.getByText("d")
        expect(header_1).toBeInTheDocument()
        expect(header_2).toBeInTheDocument()
        expect(header_3).toBeInTheDocument()
        expect(header_4).toBeInTheDocument()
        const data_1 = screen.getByText("1")
        const data_2 = screen.getByText("2")
        const data_3 = screen.getByText("3")
        const data_4 = screen.getByText("4")
        expect(data_1).toBeInTheDocument()
        expect(data_2).toBeInTheDocument()
        expect(data_3).toBeInTheDocument()
        expect(data_4).toBeInTheDocument()
    })

})