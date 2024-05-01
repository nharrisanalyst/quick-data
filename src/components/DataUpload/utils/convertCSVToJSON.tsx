import csv from 'csvtojson';


export const convertCSVToJSON = async (csvString:string):Promise<Array<any>|Object> =>{
    const newJSON =  await csv().fromString(csvString);
    return newJSON;
}



