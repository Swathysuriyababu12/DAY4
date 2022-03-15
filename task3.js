//How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };


if(_.isEqual(obj1,obj2)){
    console.log("equal");
}else{
    console.log("not equal");
}


/*RESULT
equal

*/