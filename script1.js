function ejer1(){
    let a=prompt("Ingrese un numero ");
    let i=1;
    while(i<a){
        if(i%5==0){
            alert(i);
        }
        i++;
    }
}
function ejer2(){
    let numero1, numero2;
    do {
        numero1 = parseInt(prompt("Introduce el primer número entre 1 y 50:"));
    } while (numero1 < 1 || numero1 > 50);

    do {
        numero2 = parseInt(prompt("Introduce el segundo número entre 1 y 50:"));
    } while (numero2 < 1 || numero2 > 50);
    let i = 1;
    do {
        if (i === numero1 || i === numero2) {
            console.log("Loteria", i);
        } else {
            console.log(i);
        }
        i++;
    } while (i <= 50);
}
function ejer3(){
    let a;
    let b=[];
    do{
        a=parseInt(prompt("Ingrese un numero "));
        if(a!=0){
            b.push(a);
        }
    }while(a!=0)
    alert(b);
 }
function ejer4(){
    var a;
    var b=[];
    do{
        a = prompt("Ingrese letras o palabras")
        if(a!=""){
            b.push(a);
        }
    }while(a!= "")
    alert(b);

}
function  ejer5(){
    var a;
    do{
        a=prompt("Ingrese un dia de la semana ");
        if(a=="Lunes"){
            alert("Feliz inicio de semana");
        }
        if(a=="Martes"){
            alert("Hoy se trabaja el doble");
        }
        if(a=="Miercoles"){
            alert("Ve a recoger a tus hijos");
        }
        if(a=="Jueves"){
            alert("Hoy toca ir al gimnasio");
        }
        if(a=="Viernes"){
            alert("Casi se acaba la semana ");
        }
        if(a=="Sabado"){
            alert("Feliz fin de semana ");
        }
    }while(a!="Domingo")
    alert("Ve a descansar");
}
