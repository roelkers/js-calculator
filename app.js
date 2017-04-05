var main = function(){
  var operator = null;
  var prev = null;
  var mem = 0;
  var resultShown = false;
  var operatorPressed = false;

  var plus = function(a,b){
    return a+b;
  }
  var minus = function(a,b){
    return a-b;
  }
  var divide = function(a,b){
    return a/b;
  }
  var multiplicate = function(a,b){
    return a*b;
  }
  var sqrt = function(a){
    return Math.sqrt(a);
  }
  var square = function(a){
    return a*a;
  }
  function roundNumber(num, scale) {
  var number = Math.round(num * Math.pow(10, scale)) / Math.pow(10, scale);
  if(num - number > 0) {
    return (number + Math.floor(2 * Math.round((num - number) * Math.pow(10, (scale + 1))) / 10) / Math.pow(10, scale));
  } else {
    return number;
  }
}
  $("#percent").on("click",function(){
    var current = parseFloat($("#inputField").val());
    if(current)
      $("#inputField").val(roundNumber(divide(current,100),6));
    operatorPressed = false;
    resultShown = true;
  })
  function calculateResult(){
    var current = parseFloat($("#inputField").val());
    if(prev!=null){
      var result = operator(prev,current);
      $("#inputField").val(roundNumber(result,6));
      prev  = result;
    }
    else{
      $("#inputField").val("");
      prev = current;
    }
    resultShown = true;
    operatorPressed = true;
  }
  $("#minus").on("click",function(){
    calculateResult();
    operator = minus;
  })
  $("#plus").on("click",function(){
    calculateResult();
    operator = plus;
  })
  $("#divide").on("click",function(){
    calculateResult();
    operator = divide;
  })
  $("#multiplicate").on("click",function(){
    calculateResult();
    operator = multiplicate;
  })
  $("#sqrt").on("click",function(){
    var current = parseFloat($("#inputField").val());
    $("#inputField").val(roundNumber(sqrt(current),6));
    resultShown = true;
    operatorPressed = false;
  })
  $("#square").on("click",function(){
    var current = parseFloat($("#inputField").val());
    $("#inputField").val(roundNumber(square(current),6));
    resultShown = true;
    operatorPressed = false;
  })
  $("#equals").on("click",function(){
    if(operator===null ||resultShown===true){
      return;
    }
    var current = parseFloat($("#inputField").val());
    var result = operator(prev,current);
    $("#inputField").val(result);
    prev  = result;
    resultShown = true;
    operatorPressed = false;
  })

  $(".number").on("click",function(){
   if(resultShown){
     if(!operatorPressed){
       prev = null;
     }
     $("#inputField").val($(this).text());
     resultShown = false;
   }
    else{
      $("#inputField").val($("#inputField").val() + $(this).text());
    }

  })
  $("#clear").on("click",function(){
    $("#inputField").val("");
  })
  $("#allclear").on("click",function(){
    $("#inputField").val("");
    mem = 0;
    operator = null;
    prev = null;
    operatorPressed = false;
  })
  $("#memminus").on("click", function(){
    mem -= parseFloat($("#inputField").val());
    $("#inputField").val(mem);
    resultShown = true;
    operatorPressed = false
  })
  $("#memplus").on("click", function(){
    mem += parseFloat($("#inputField").val());
    $("#inputField").val(mem);
    resultShown = true;
    operatorPressed = false;
  })
  $("#memclear").on("click", function(){
    mem = 0;
  })
}


$(document).ready(main);
