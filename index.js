function logDriverNames(arr){
    arr.forEach(x => console.log(x.name))
}

function logDriversByHometown(arr, location){
    arr.forEach( x => {
        if (x.hometown === location) {
            console.log(x.name)
        }
    })
}

function driversByRevenue(arr){
     let ArrCopy = [...arr]
     return ArrCopy.sort((a,b) => a.revenue - b.revenue)
}

function driversByName(arr){
    let ArrCopy = [...arr]
     return ArrCopy.sort((a,b) => a.name.localeCompare(b.name))
}

function totalRevenue(arr){
    let sum = 0
    arr.forEach(x => sum += x.revenue)
    return sum
}

function averageRevenue(arr){
    return totalRevenue(arr) / arr.length
}
