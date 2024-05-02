import csv from 'csvtojson';
import { resolve } from 'node:path/win32';


export const convertCSVToJSON = async (csvString:string) =>{
    const newJSON =  await csv().fromString(csvString);
    return newJSON;
}



