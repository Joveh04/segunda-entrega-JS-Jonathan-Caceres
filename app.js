/*variables*/
let Usuario = "Jonathan";
let Contraseña = "Caceres";
let impuestos = 30;
let porcentaje = 100
let Jornales = valorHora * HorasTrabajadas;
let horaExtra = valorHora * 2;
let horasExtras = HorasExtrasTrabajadas * horaExtra;
let totalJornalNominales = horasExtras + Jornales;


let SolicitudDeUsuario = prompt("ingrese su nombre de usuario");
let SolicitudContraseña= prompt ("ingrese su contraseña") ;
if(SolicitudDeUsuario== "Jonathan" && SolicitudContraseña == "Caceres"){
    alert("bienvenido al calculador de sueldo liquido jornal liquido");

}else{
    alert("usuario incorrecto");
}

let valorHora = Number(prompt("ingrese el valor de la hora nominal"))
let HorasTrabajadas = Number(prompt("ingrese la cantidad de horas trabajadas"));

console.log(`el valor de las horas trabajadas es de $${Jornales} `);

let HorasExtrasTrabajadas= Number(prompt("ingrese la cantidad de horas extras trabajadasa"));

console.log(`El total de horas extras generadas en el mes es de ${horaExtra} * ${HorasExtrasTrabajadas} = ${horasExtras}`)

console.log(` el total Nominal a combrar es de ${Jornales}+ ${horasExtras} = ${totalJornalNominales}`);

function calculadoraImpuestos(totalJornalNominales,impuestos,porcentaje){
    return totalJornalNominales * impuestos / porcentaje;
}

let resultadoImpuesto = calculadoraImpuestos(totalJornalNominales,impuestos,porcentaje);
console.log(`total impuestos calculados: ${resultadoImpuesto}`);


console.log(` el total de impuestos es del 30% lo cual resulta el monto de ${resultadoImpuesto}`);

function calcularLiquido(totalJornalNominales,resultadoImpuesto){
 return totalJornalNominales - resultadoImpuesto;
}

let resultadoLiquido = calcularLiquido(totalJornalNominales,resultadoImpuesto);
console.log(`el total liquido a cobrar es de $${resultadoLiquido}`);




