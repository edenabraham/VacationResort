/* 
//old school init works only if its the only listener to onload event
function init() {
    
}
window.onload= init // wait until body/html is loaded
*/
document.addEventListener("DOMContentLoaded", () => ( // begin annonymous
    //init code here
    document.getElementById("calculate").addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const checkinDate = document.getElementById("checkinDate").value;
        const nights = document.getElementById("nights").value;
        const adults = document.getElementById("adults").value;
        const children = document.getElementById("children").value;

        const kings = document.getElementById("kings").checked;
        const queen = document.getElementById("queen").checked; 
        const suite = document.getElementById("suite").checked;

        const none = document.getElementById("none").checked;
        const senior = document.getElementById("senior").checked;
        const military = document.getElementById("military").checked;
        
        
        let calculatedPrice= 0;
        document.getElementById("calculatedPrice").innerHTML = output;

    })
)); 
