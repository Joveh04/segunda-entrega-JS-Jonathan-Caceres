
let Usuario = "jefe";
let Contraseña = 1234;
let SolicitudDeUsuario = prompt("ingrese su nombre de usuario");
let SolicitudContraseña= prompt ("ingrese su contraseña") ;
if(SolicitudDeUsuario== "jefe" && SolicitudContraseña == 1234){
    alert("bienvenido al calculador de sueldo liquido jornal liquido");

}else{
    alert("usuario incorrecto");
}

let valorHora = Number(prompt("ingrese el valor de la hora nominal"))
let HorasTrabajadas = Number(prompt("ingrese la cantidad de horas trabajadas"));
let Jornales = valorHora * HorasTrabajadas;
console.log(`el valor de las horas trabajadas es de $${Jornales} `);

let horaExtra = valorHora * 2;
let HorasExtrasTrabajadas= Number(prompt("ingrese la cantidad de horas extras trabajadasa"));

let horasExtras = HorasExtrasTrabajadas * horaExtra;
console.log(`El total de horas extras generadas en el mes es de ${horaExtra} * ${HorasExtrasTrabajadas} = ${horasExtras}`)

 let totalJornalNominales = horasExtras + Jornales;
 console.log(` el total Nominal a combrar es de ${Jornales}+ ${horasExtras} = ${totalJornalNominales}`);

 let impuestos = 30;
let impuestosCalculados = totalJornalNominales * impuestos / 100;

console.log(` el total de impuestos es del 30% lo cual resulta el monto de ${impuestosCalculados}`);

function calcularLiquido(totalJornalNominales,impuestosCalculados){
 return totalJornalNominales - impuestosCalculados;
}

let resultadoLiquido = calcularLiquido(totalJornalNominales,impuestosCalculados);
console.log(`el total liquido a cobrar es de $${resultadoLiquido}`);







