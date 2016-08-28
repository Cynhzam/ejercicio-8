var opcion = parseInt(prompt("Escoja una opcion:\n" +
  "1.Suma\n" +
  "2.Resta\n" +
  "3.Multiplicación\n" +
  "4.División\n" +
  "5.Residuo\n" +
  "6.Relación menor\n" +
  "7.Relación mayor\n" +
  "8.Relación mayor o igual\n" +
  "9.Relacion menor o igual"));
var resultado 
if(opcion<=0 || opcion>=9) {
  window.alert("No es una opción válida");
} else {
  var num1 = parseInt(prompt("Ingresa un número"))
  var num2 = parseInt(prompt("Ingresa otro número"))
}
switch(opcion) {
  case 1:
       resultado = num1 + num2;
       window.alert("El resultado es " + resultado);
       break;
  case 2:
       resultado = num1 - num2;
       window.alert("El resultado es " + resultado);
       break;
  case 3 :
       resultado = num1 * num2;
       window.alert("El resultado es " + resultado);
       break; 
  case 4:
       resultado = num1 / num2;
       window.alert("El resultado es " + resultado);
       break;
  case 5:
       resultado = num1 % num2;
       window.alert("El resultado es " + resultado);
       break; 
  case 6:
       resultado = num1 < num2;
       if (resultado) {
          window.alert(num1 + " es menor que " + num2)
       } else {
          window.alert(num1 + " no es menor que " + num2)
       }
       break;
  case 7:
       resultado = num1 > num2;
       if (resultado) {
          window.alert(num1 + "es mayor que " + num2)
       } else {
          window.alert(num1 + " no es mayor que " + num2)
       }
       break;
  case 8:
       resultado = num1 <= num2;
       if (resultado) {
          window.alert(num1 + "es menor o igual que " + num2)
       } else {
          window.alert(num1 + " no es menor o igual que " + num2)
       }
       break;
  case 9:
       resultado = num1 >= num2;
       if (resultado) {
          window.alert(num1 + "es mayor o igual que " + num2)
       } else {
          window.alert(num1 + " no es mayor o igual que " + num2)
       }
       break; 
}

