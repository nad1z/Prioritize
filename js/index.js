//RICE Calculator 
function calculateRice() {
  var featureOneName = document.getElementsByName("featureOneReach")[0].textContent;
  var featureOneReach = document.getElementsByName("featureOneReach")[0].value;
  var featureOneImpact = document.getElementsByName("featureOneImpact")[0].value;
  var featureOneConfidence = document.getElementsByName("featureOneConfidence")[0].value;
  var featureOneEffort = document.getElementsByName("featureOneEffort")[0].value;
  var featureOneRiceScore = ((featureOneReach*featureOneImpact*featureOneConfidence)/featureOneEffort)
  var featureOneRiceScore = document.getElementById("featureOneRiceScore").innerHTML = Math.round(featureOneRiceScore);
}

//Fotters year auto update
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
