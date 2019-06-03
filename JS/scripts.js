function triangle() {
  var base = parseInt(document.getElementById("base").value);
  var height = parseInt(document.getElementById("height").value);
  var hypotenuse = parseInt(document.getElementById("hypo").value);

  if (base + height > hypotenuse && base + hypotenuse > height && hypotenuse + height > base) {
    if (base == height && base == hypotenuse) {
      alert("Equilateral");
    } else if (base === height || height === hypotenuse || base === hypotenuse) {
      alert("isosceles");
    } else if (base != height && height != hypotenuse && base != hypotenuse) {
      alert("scalene");
    }
  } else {
    alert("Not a Triangle");
  }
  confirm("Hey, are you done?")
  alert("Thank you!!")
};
