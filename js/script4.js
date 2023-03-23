function myFunction() {
    let text;
    if (document.getElementById("id1").validity.rangeUnderflow) {
      text = "Value too small";
    } else {
      text = "Input OK";
    } 
    document.getElementById("demo").innerHTML = text;
  }