

const velocimetro = document.querySelector("#velocimetro")
const velocidade = document.querySelector("#velocidade")


let watchID = null
const option = {enableHightAccuracy:true}
velocimetro.addEventListener("click",()=>{
    if(!watchID){
        watchID = navigator.geolocation.watchPosition(updatePosition, handleError)
    }else{
        navigator.geolocation.clearWatch(watchID)
    watchID = null
    valocidade.textContent = 0
    }
})

navigator.geolocation.watchPosition(updatePosition, handleError, )



function updatePosition(position){
    console.log(position.coords.speed * 3.6)
    if (position.coords.speed === null)
    return
    velocidade.textContent = (position.coords.speed * 3.6).toFixed(1)
}

function handleError(error){
    console.log(error.message)
}