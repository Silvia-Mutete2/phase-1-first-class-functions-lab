
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    return ['Antonia', 'Nuru']
}

function returnLastTwoDrivers(){
    return ['Amari', 'Mo']
}

// arrow function
// const add = [parameter1 + parameter2]=>parameter1 + parameter2
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


//should multiply a given value using the created multiplier
const createFareMultiplier = function (fareMultiplier){
  return function(value) {
        return fareMultiplier * value;
      }
    }   


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


//returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
function selectDifferentDrivers(drivers, func){
    return func(drivers);

}