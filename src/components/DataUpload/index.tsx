import React, { useState, FormEvent } from 'react';
import './dataUpload.scss';


const DataUpload =() =>{
    const [dataUploaded, setDataUploaded] = useState<boolean>(false);

    const onUpload = (event:FormEvent<HTMLInputElement> ) =>{
        //console.log('this is really here to be')
        setDataUploaded(true);
    }

    const formSent = (
        <>
          <h3> Your data has been Uploaded</h3>
        </>
    )
    return(
    <div className='data-uploader' data-testid="data-uploader">
        <label htmlFor="data-input" > Upload Your Data (csv or JSON):</label>
        <input id="data-input" type="file" accept="text/csv, application/json" aria-label="data-input" onChange={onUpload}/>

        {dataUploaded?formSent:null}

    </div>
    )
}

export default DataUpload