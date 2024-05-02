import React, { useState } from 'react';
import DataUpload from '../components/DataUpload';
import ReactTable from '../components/ReactTable';

import './quickdata.scss';

const QuickData = () =>{
    const [tableData, setTableData] = useState<Array<any>>([])
    const [dataSet,setDataSet] = useState<boolean>(false); 
    const onDataUploaded =(data:Array<any>):void =>{
        setTableData(data);
        setDataSet(true);  //setting the data set as true to display the ReactTable
    }
    return(
    <div className='quick-data-cont' data-testid="quick-data-test-id">
        <DataUpload onDataUploaded={onDataUploaded}/>
        {dataSet?(<ReactTable data={tableData} />):(<div><h3>Upload Data To See The Data Table</h3></div>)}
    </div>
    )
}

export default QuickData;