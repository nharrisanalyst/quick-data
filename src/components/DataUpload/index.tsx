import React, { useState, FormEvent } from 'react';
import './dataUpload.scss';


const DataUpload =() =>{
    const [dataUploaded, setDataUploaded] = useState<boolean>(false);

    const onUpload = (event:FormEvent<HTMLInputElement> ) =>{
        //console.log('this is really here to be')
        setDataUploaded(true);
    }

    const formSent = (
        <div className='data-uploaded-message'>
          <h3> Your data has been Uploaded</h3>
        </div>
    )
    return(
             <>
                <div className='data-uploader' data-testid="data-uploader">
                    <div className='data-uploader-form'>
                        <label htmlFor="data-input" > Upload Your Data (csv or JSON):</label>
                        <input id="data-input" type="file" accept="text/csv, application/json" aria-label="data-input" onChange={onUpload}/>
                    </div>
                </div>
                {dataUploaded?formSent:null}
            </>
    )
}

export default DataUpload