const xC = document.getElementById('xCoordinate');
const yC = document.getElementById('yCoordinate');
// const position = element.getBoundingClientRect();

addEventListener("mousemove",(e)=>{
    xC.textContent = String(e.clientX);
    yC.textContent = String(e.clientY);
});