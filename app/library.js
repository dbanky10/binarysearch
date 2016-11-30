// implementing the toTwenty function
Array.prototype.toTwenty = function(){
    var start = 1;
    var end = 20;

    for(var i = start; i <= end; i += 1){
        this.push(i);
    }
   return this;
};
var oneToTwenty = [].toTwenty();
// implementing the toForty function
Array.prototype.toForty = function(){
    var start = 2;
    var end = 40;

    for(var i = start; i <= end; i += 2){
        this.push(i);
    }
   return this;
};

var onetoForty = [].toForty();
// implementing the toOneThousand function
Array.prototype.toOneThousand = function(){
    var start = 10;
    var end = 1000;

    for(var i = start; i <= end; i += 10){
        this.push(i);
    }
   return this;
};

var toOneThousand = [].toOneThousand();
//implementing the search function
Array.prototype.search = function(n) {
var result = {};
 var lo = 0;
 var hi = this.length-1;
 var length = this.length;
 result.count = 0;
 while(lo <= hi){
  mid = Math.floor((lo + hi) / 2);
  if(this[mid] === n){
    result.index = mid;
    break;
  }
  else if(this[mid] < n){
    lo = mid + 1;
    result.count += 1;
  }
  else if(this[mid] > n){
   hi = mid - 1;
  }
}
if(result.hasOwnProperty('index') === false)
{ 
  result.index = -1;
  
}
return result;
};
















