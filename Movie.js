class Cinema{

constructor(movieName , timing , seats){
    this.movie = movieName;
    this.time = timing;
    this.seat = seats;
}

TicketConfirmation(){
    console.log(`Successfully Booked ticket for ${this.movie} at
         ${this.time} for ${this.seat} members `)
}

}

let ref = new Cinema("Kanguva" , 7 , 9);

ref.TicketConfirmation();