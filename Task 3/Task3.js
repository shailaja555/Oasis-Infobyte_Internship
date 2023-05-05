
function celToFar(output){
    output = ( parseFloat(output) );
    document.getElementById("outputFahrenheit").innerHTML=(output * 9/5 ) + 32;
}
function farToCel(output){
    output = ( parseFloat(output) );
    document.getElementById("outputCelcius").innerHTML=(output  - 32) * 5/9;
}
