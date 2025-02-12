/**
 * APP PWA - Etanol x Gasolina
 * @author murilo dos santos 
 * @version 2.0
 */


//===============================================
//Registro do service worker

// se o navegador de internet suportar este recurso
if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(()=> {
        console.log("Service worker resgistrado");
        
    })

}
//===============================================

function calcular() {
   // capturar os valores das caixas de input
   let Gasolina = document.getElementById('Gasolina').value
   let Etanol = document.getElementById('Etanol').value
   let kmlGasolina = document.getElementById('kmGasolina').value
   let kmlEtanol = document.getElementById('kmEtanol').value

  // calculo da vantagem
  if (Etanol < (kmlEtanol / kmlGasolina) * Gasolina) {
    document.getElementById('status').src = "img/etanol.png"
} else {
    document.getElementById('status').src = "img/gasolina.png"
}




}