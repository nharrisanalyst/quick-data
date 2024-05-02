import React, { useState, FormEvent } from 'react';
import { convertCSVToJSON } from './utils/convertCSVToJSON';
import './dataUpload.scss';

type dataUploadProps ={
    onDataUploaded?: (data:Array<any>)=>void    
}

const defaultonDataUpLoaded =(data:Array<any>):void =>{}; //this is just a blank function so that this componet is not to coupled with the parent component

const DataUpload =({onDataUploaded = defaultonDataUpLoaded}:dataUploadProps) =>{
    
    const [dataUploaded, setDataUploaded] = useState<boolean>(false);

    const onUpload = (event:FormEvent<HTMLInputElement> ) =>{
        
        const reader = new FileReader();
        const file:File = (event.target as HTMLInputElement).files![0];
        const fileType:string =(event.target as HTMLInputElement).files![0].type;
        
        reader.readAsText(file)
        
        reader.onload =  async(e) => {  
            const bfile = e.target?.result as string; 
             const fileAsJSON = await convertCSVToJSON(bfile);
             onDataUploaded( fileAsJSON );   // this shows bfile
           }

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