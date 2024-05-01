import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { createColumns } from './utils'

type ReactTableProps =  {
    data?:Array<Object>;
}

const ReactTable = ({data=[]}:ReactTableProps) =>{
    console.log('this is the main place', data);
    const COLUMNS = data.length>0?createColumns(data[0]):[];
   
   return (
    <div data-testid="react-table">
       <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
       {COLUMNS.map((col, i) => (
        <Column key={col.label} field={col.label} header={col.label} />
    ))}
       </DataTable>
    </div>
   )
}


export default ReactTable;