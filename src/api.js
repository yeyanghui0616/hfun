const host = 'http://127.0.0.1:3003/news' 

const all = () =>{
   return  fetch(host).then(res=>res.json())
}

const find = id => {
    return  fetch(host+`/${id}`).then(res=>res.json())
}
export  default { all,find }