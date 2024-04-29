

export const createRender =(key:string):any =>{
     const render = (item: typeof Object):any => item[key as keyof typeof item];
     return render;
}

export const createColumns = (keyObject : Object) =>{
    const COLUMNS:Array<any> =[];
    Object.keys(keyObject).forEach(key =>{
      const column = {label:key, renderCell:createRender(key)}
      COLUMNS.push(column)
    })

    return COLUMNS;
}
