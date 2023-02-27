
const returnFirstTwoDrivers = function (drivers) {

    return [...drivers.slice(0, 2)]
}



const returnLastTwoDrivers = function (drivers) {


    return [...drivers.slice(-2)]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return (fare) => int * fare

}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, subSelect) {

 return   subSelect === returnFirstTwoDrivers ? returnFirstTwoDrivers(drivers) : returnLastTwoDrivers(drivers)


}