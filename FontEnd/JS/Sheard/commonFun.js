export const  sliceTitle=(title)=> {
const result = title.length > 20 ?title.slice(0,20)+'...':title
  return result;  
}

export const makeUrl = (parms)=>{

    const urlResult = `http://localhost:5000/api${parms}`;

    return urlResult;
}
export const searchUrl=()=>{
  const queryparams =window.location.search;
const parse = new URLSearchParams(queryparams);
const querys = [...parse]
const obj={};
querys.forEach(query => {
  obj[query[0]]=query[1]
  
});
return obj
}