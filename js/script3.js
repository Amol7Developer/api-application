function myFunction() {
    let text;
    if (document.getElementById("id1").validity.rangeOverflow) {
      text = "Value too large";
    } else {
      text = "Input OK";
    } 
    document.getElementById("demo").innerHTML = text;
  }