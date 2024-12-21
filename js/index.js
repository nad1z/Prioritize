//inputs
var featureOneReach = document.getElementsByClass("featureOneReach");
var featureOneImpact = document.getElementsByClass("featureOneImpact");
let featureOneRiceScore = document.querySelector("featureOneRiceScore");

//results 
function calculateRice() {
    var featureOneRiceScore = Number(featureOneReach*featureOneImpact)
    document.getElementsById("featureOneRiceScore").innerHTML = "featureOneRiceScore"
    console.log(featureOneRiceScore)
}
onclick("button") = function()

//Fotters year auto update
document.getElementById("currentYear").innerHTML = (new Date()).getFullYear()
