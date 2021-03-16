

export const getQuery = function (category, isOld, isPage=1, limit=10){
    let str = category;

    if(str.length===0){
        str = str+'?_sort=id';
    }else {
        str ='?type.pathName='+ str + '&_sort=id';
    }
    str = str + `&_page=${isPage}&_limit=${limit}`; //pagination

    const a = isOld?'&_order=desc':'&_order=asc';
    str = str + a;//определяется порядок

    return str
}