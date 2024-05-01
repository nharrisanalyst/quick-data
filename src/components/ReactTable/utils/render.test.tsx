import { createRender, createColumns } from './'


describe('this is test for the render function for our tables',()=>{
    it('correctly returns the right render data',()=>{
        const data ={"example":"1"};
        const render = createRender('example');
        const returnedData = render(data);
        expect(returnedData).toBe("1");
    })

})

describe('test for function createTableCoumns',()=>{
    //takes a json object  {key:value}
    //returns  column header {label "key", item => item[key]}

    const testJSONObject = {
        "name":"nathan",
        "age":"29",
        "sex":"male"
    }

    const COLUMNS = createColumns(testJSONObject);

    expect(COLUMNS.length).toBe(3)
    expect(COLUMNS[0].label).toBe("name")
    expect(COLUMNS[1].label).toBe("age")
    expect(COLUMNS[2].label).toBe("sex")
    expect(COLUMNS[0].renderCell(testJSONObject)).toBe("nathan")
    expect(COLUMNS[1].renderCell(testJSONObject)).toBe("29")
    expect(COLUMNS[2].renderCell(testJSONObject)).toBe("male")

})