function compute() {
    var principal =  parseInt(document.getElementById("principal").value);
    if(principal<=0){
      window.alert("Enter a positive number").location.reload();

    }
    var rate =  parseInt(document.getElementById("rate").value);
    var years =  parseInt(document.getElementById("years").value);
    var interest = (principal * years * rate) / 100;

     var year = new Date().getFullYear()+years;

        document.getElementById("btn").addEventListener("click", function() {
       document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,"+"<br />";
       document.getElementById("result1").innerHTML = "at an interest rate of <mark>"+rate+"</mark>%."+"<br />";
       document.getElementById("result2").innerHTML = "You will receive an amount of <mark>"+interest+","+"</mark><br />";
       document.getElementById("result3").innerHTML = "in the year <mark>"+year+"</mark>";


     });
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
