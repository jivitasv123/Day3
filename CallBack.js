

function  Task(callback){
console.log("Class & Object task given")

setTimeout(    ()=>{
    console.log("Task for Laptop , Car is assigned and once done will move");
    callback();
}             ,   5000              );
}


function NextTopic(){
    console.log("Next topic is Promises")
}

Task(NextTopic);
