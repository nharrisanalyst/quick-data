import { convertCSVToJSON } from './convertCSVToJSON';

describe(" test for convertCSVTOJSON",  ()=>{
    it('takes csv text and converts it to json', async ()=>{
        const csvAsText = 
        `a,b,c,d
        1,2,3,4`;
        const newJSON =  await convertCSVToJSON(csvAsText);
        const expectedJSON = [{a:"1",b:"2",c:"3", d:"4"}];
        expect(newJSON).toEqual(expectedJSON);
    })
})