temp = prompt("Entre com sua temperatura atual: ");
temp = parseFloat(temp);
if (temp <= 35) {
  console.log("Hipotermia");
} else {
  if (temp <= 37.7) {
    console.log("Normal");
  } else {
    if (temp <= 39.5) {
      console.log("Febre");
    } else {
      if (temp <= 41) {
        console.log("Febre Alta");
      }
      else{
        console.log("Hipertemia")
      }
    }
  }
}
