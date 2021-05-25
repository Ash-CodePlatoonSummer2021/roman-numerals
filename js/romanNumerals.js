exports.toRoman = function(num) {
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var output=''
    for(var i=0;i<13;i++){
      var quotient = Math.floor(num/numbers[i]);
      num=num%numbers[i];
      for(var j=0;j<quotient;j++){
        output+=symbols[i];
      }
    }  
    return output; 
};
