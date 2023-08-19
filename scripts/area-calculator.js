function calculateTriangleArea(){
    // get base value by id
   const baseField = document.getElementById('triangle-base');
   const baseValueText = baseField.value;
   const base = parseFloat(baseValueText);

   //get triangle height value
   const heihgtField = document.getElementById('triangle-height');
   const heightValueText = heihgtField.value;
   const height =parseFloat(heightValueText);
   const area = 0.5*base*height;
    //show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;  
}

function calculateRectangleArea(){

  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  const area = width*length;

  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = area;
}

function calculateParallelogramArea(){
const base = getInputValue('parallelogram-base');
const height = getInputValue('parallelogram-height');
const area = base*height;
setElementInnerText('parallelogram-area',area);
}
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const ellipseArea = 3.1416 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area',ellipseArea);
}
function calculateRhombusArea(){
    const firstDiagonal = getInputValue('rhombus-diagonal-one');
    const secondDiagonal = getInputValue('rhombus-diagonal-two');
    const rhombusArea = firstDiagonal*secondDiagonal*0.5;
    setElementInnerText('rhombus-area',rhombusArea);
}
function calculatePentagonArea(){
    const pentagonPerimeter = getInputValue('pentagon-perimeter');
    const pentagonApothem = getInputValue('pentagon-apothem');
    const pentagonArea = 0.5*pentagonPerimeter*pentagonApothem;
    setElementInnerText('pentagon-area',pentagonArea);
}
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setElementInnerText(elementId, area){
const element = document.getElementById(elementId);
element.innerText = area;
}