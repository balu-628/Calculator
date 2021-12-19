function getHistory(){
  return $("#history-value").text();
  //return document.getElementById("history-value").innerText;
}
function printHistory(num){
  $('#history-value').text(num);
}
function getOutput(){
    return $('#output-value').text();
}

function printOutput(num){
  if(num ==""){
    $('#output-value').text(num);
  }
  else{
    $('#output-value').text(getFormattedNumber(num));
  }
}
function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString('en');
  return value;
}

function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}
$('.number').on('click',function(){
  var output=reverseNumberFormat(getOutput());
  if(output!= NaN){
    output=output+this.id;
    printOutput(output);
  }
});
$('.operator').on('click',function(){
  if(this.id=='clear'){
    printHistory("");
    printOutput("");
  }
  else if(this.id=='backspace'){
    var output = reverseNumberFormat(getOutput()).toString();
    if(output){
      output= output.substr(0,output.lenght-1);
      printOutput(output);
    }
  }
    else{
    var output=getOutput();
    var history=getHistory();
    if(output==""&&history!=""){
      if(isNaN(history[history.length-1])){
        history= history.substr(0,history.length-1);
      }
    }
    if(output!="" || history!=""){
      output= output==""?output:reverseNumberFormat(output);
      history=history+output;
      if(this.id=="="){
        var result=eval(history);
        printOutput(result);
        printHistory("");
      }
      else{
        history=history+this.id;
        printHistory(history);
        printOutput("");
      }
    }
  }
});

