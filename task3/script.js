const trafficLights = document.querySelectorAll(".trafficLight");

document.querySelector('.container').addEventListener('click', () => {
    inclusion();
});

let activeLight = 2;

trafficLights.addEventListener('click', inclusion);

function inclusion() {
    trafficLights[activeLight].className = 'trafficLight';
    activeLight++;

    if(activeLight > 2) {
        activeLight = 0;
    }
    
    const currentLight = trafficLights[activeLight];
    currentLight.classList.add(currentLight.getAttribute
        ("color"))
}




