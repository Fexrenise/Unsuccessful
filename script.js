let cars = ['bmw', 'mersedes', 'audi', 'opel'];
let marka = [
    ['X6', 'X7', 'X8'],
    ['S class', 'e class'],
    ['q7', 'a4'],
    ['astar', 'vectra']
];
// let img = [
//     x6.jpg, x7.jpg, x8.jpg
// ]
let carsSelect = document.getElementById('cars');
let markaSelect = document.getElementById('marka');
let imgSrc = document.getElementById('img');
let opt=" "
let opt2=" "
onload = function(){
    opt = `<option value="" selected disabled> Masin sec </option>`;
    for(let i = 0; i<cars.length; i++){
        opt += `<option value="${i}" id="sec"> ${cars[i]} </opyion>`;
    }
carsSelect.innerHTML = opt;
}
function select(){
    let opt2 = `<option value="" selected disabled> marka sec </option>`;
    
        for(let key of marka){
            for(let sdf of key){
                opt2 += `<option> ${sdf} </opyion>`;
            }
        }
    
markaSelect.innerHTML = opt2;
}
// function images(){
//     for(let i = 0; i<img.length; i++){
//         imgSrc.innerHTML += i;
//     }
// }