import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import DataUpload from "./";



describe("test for <DataUpload/>", ()=>{
    it("uploades without crashing", ()=>{
        render(<DataUpload />)
        const mainDiv = screen.getByTestId("data-uploader")
        expect(mainDiv).toBeInTheDocument()
    })

    it('has a input type file', ()=>{
        render(<DataUpload />)
        const fileUpload = screen.getByLabelText(/Upload Your Data/i) as HTMLInputElement
        expect(fileUpload).toBeInTheDocument()
    })

    it('uploads file, sets file in state and displays a message that a file has been uploaded', async ()=>{
        const user = userEvent.setup()
        render(<DataUpload />)
        const fakeCSV = new File(['example'], 'hello.csv', {type: 'text/csv'})
        const dataInput = screen.getByLabelText(/Upload Your Data/i) as HTMLInputElement;
        
        await act( async() => {
            await user.upload(dataInput, fakeCSV);
        })
        const uploadedMessage = screen.getByText('Your data has been Uploaded');
        
        expect(dataInput.files![0].name).toBe('hello.csv');
        expect(dataInput.files![0]).toBe(fakeCSV);
        expect(uploadedMessage).toBeInTheDocument(); //this test that the state has changed
        

    })
})