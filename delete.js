function deleteObj(id,arr){
let i

let deleted 

for(i=0;i<arr.length;i++){

if(arr[i].Id == id){
deleted = arr.splice(i,1);

return arr

}

}

}

let array = [{Id:1, name:"Sidzinga"},{Id:2, name:"Emily"},{Id:3, name:"Moral"},{Id:4, name:"Gift"},{Id:5, name:"Candice"}]

console.log(deleteObj(2,array))