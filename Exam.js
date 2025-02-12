function HallTicket(callback){

    console.log("Hall ticket issue");

    setTimeout(()=>{
        console.log("Exam preparation and Exam started")
        callback();
    } , 4000)
}




function Result(callback){
console.log("Exam completed");

setTimeout( ()=>{
    console.log("Waiting for Result");
    console.log("Pass with 87%")
    callback();
} , 4000)


}

function CollegeApply(callback){
    console.log("Admission form applied & submitted")

    setTimeout(()=>{
     console.log("Seat Confirmation and Joining date")
     callback()
    } , 4000)
    
}


HallTicket(()=>{
    Result(()=>{
        CollegeApply(()=>{
            console.log("Today is Day 1")
        })
    })
})