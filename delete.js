function deleteObj(id,arr){ // setting function with id and arr as arguments representing the id of the object being removed and the array it's removed from respectively
let i // creating a variable to use in for loop

let deleted //setting variable for index of object to be removed when called in for loop

for(i=0;i<arr.length;i++){ // for loop to loop through array with 

if(arr[i].Id == id){ // if statement which selects array element with the id passed in function arguments, selected element will have the following code run on it 

  
deleted = arr.splice(i,1); // setting a value for deleted variable which also removes 1 item at the index of array with the value of i 

return arr // returning new array without the deleted element

}

}

}

let array = [{Id:1, name:"Sidzinga"},{Id:2, name:"Emily"},{Id:3, name:"Moral"},{Id:4, name:"Gift"},{Id:5, name:"Candice"}] // Example

console.log(deleteObj(2,array))
