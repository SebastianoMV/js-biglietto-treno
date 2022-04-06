
/*
1. Chiedere numero di km
2. Chiedere età
3. Calcolare prezzo biglietto (km * 0,21)
4. Applicare sconto se età<18 o età>65
5. Restituire il prezzo finale in euro
 */

const km = prompt('Quanti km devi fare?');

if(isNaN(km)){
  alert('Inserire i km in numero');

}else{
  if(km < 1){
    alert('Inserire km reali');
  }
}


const eta = prompt('Quanti anni hai?');

if(isNaN(eta)){
  alert('Inserire un numero');

}else{
  if(eta < 12){
    alert('Non puoi comprare i biglietti, è necessario essere accompagnati da un adulto');
  }
}


let prezzokm = (km * 0.21)

if (eta < 18){
  prezzokm = prezzokm - (prezzokm / 100 * 20)
}else if (eta > 65){
  prezzokm = prezzokm - (prezzokm / 100 * 40)
}

const prezzofin = Math.round((prezzokm + Number.EPSILON) * 100) / 100;


document.getElementById('prezzo-finale').innerHTML = 
` Biglietto: ${prezzofin} &euro; 
`