var locations = []; // this array will hold your objects

// object constructor
var Locations = function(state, revenue, locationCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationCount;
  this.averageRevenue = function() {
  return Math.round(this.revenue / this.locationCount);
    };

};
// object instances
var illinois = {state: "IL",revenue: 5000,locationCount: 12};
var minnesota = {state: "MN",revenue: 300,locationCount: 3};
var nevada = {state: "NV",revenue: 25000, locationCount: 1};
var locationStuff = [illinois, minnesota, nevada];
// push object instances to locations array
locations.push(locationStuff);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
