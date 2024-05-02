import csv from 'csvtojson';

export const convertCSVToJSON = async (csvString:string) =>{
    const newJSON =  await csv().fromString(csvString);
    return newJSON;
}



