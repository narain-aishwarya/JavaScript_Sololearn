function main() {
    //take flight number and its status
    var flightNumber = readLine();
    var flightStatus = readLine();
    
    var flight1 = new Flight(flightNumber, flightStatus);
    //assign a flight object to flight1 variable
    
    //output
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)
    
}

function Flight(number, status) {
    //fix the constructor
    this.number = number;
    this.status = status;
};
//to use the input function , install module
//npm install readline-sync