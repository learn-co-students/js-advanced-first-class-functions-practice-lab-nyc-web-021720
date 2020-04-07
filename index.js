// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function (driver) {
    console.log(driver.name);
  });
}
function logDriversByHometown(arr, town) {
  arr.forEach(function (driver) {
    if (driver.hometown === town) {
      console.log(driver.name);
    }
  });
}
function driversByRevenue(arr) {
  return arr.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}
function driversByName(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
}
function totalRevenue(drivers) {
  return drivers.reduce(function (total, driver) {
    total += driver.revenue;
    return total;
  }, 0);
}
function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
