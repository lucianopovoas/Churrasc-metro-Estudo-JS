/*
    Carne - 400g por pesso + de 6 horas - 650
    Cerveja - 1200ml por pessoa + 6 horas - 2000ml
    Refrigerante/agua - 1000 ml por pessoas + 5 horas 1500ml

    Criança valem por 0,5
*/

let inp_adul = document.getElementById ("inp_adul")
let inp_crian = document.getElementById ("inp_crian")
let inp_hrs = document.getElementById ("inp_hrs")

let resultado = document.getElementById("resultado")

function calcular(){
    let adultos = inp_adul.value
    let criancas = inp_crian.value
    let horas = inp_hrs.value

    let qntdcarnetotal = carnepp(horas) * adultos + carnepp(horas) / 2 * criancas
    let qntdcervejatotal = cervejapp(horas) * adultos
    let qntdbebidatotal = bebidaspp(horas) * adultos + bebidaspp(horas) / 2 * criancas

    resultado.innerHTML = `<p>${qntdcarnetotal / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntdcervejatotal / 355)}Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${qntdbebidatotal / 1000}Litros de Refrigente/Água</p>`
}

function carnepp(horas){
    if(horas >= 6){
        return 650
    }else{
        return 400
    }
}
function cervejapp(horas){
    if(horas >= 6){
        return 2000
    }else{
        return 1200
    }
}
function bebidaspp(horas){
    if(horas >= 5){
        return 1500
    }else{
        return 1000
    }
}