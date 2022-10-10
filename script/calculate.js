/* 
//old school init works only if its the only listener to onload event
function init() {

}
window.onload= init // wait until body/html is loaded
*/

"use strict"
function getRoomRate(checkinDate, queen,king,suite) {
    let roomPrice=0

    if (king || queen) {
        roomPrice= 250
    }
    else if (suite) {
        roomPrice= 350
    }
    else{
        roomPrice=0
        console.log("Invalid room type");
        return false;
    }

    return roomPrice;
}
document.addEventListener("DOMContentLoaded", () =>(
    //init code here
    document.getElementById("calculate").addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const checkinDate = document.getElementById("checkinDate").value;
        const nights = document.getElementById("nights").value;
        const adults = document.getElementById("adults").value;
        const children = document.getElementById("children").value;

        const king = document.getElementById("king").checked;
        const queen = document.getElementById("queen").checked; 
        const suite = document.getElementById("suite").checked;

        const none = document.getElementById("none").checked;
        const senior = document.getElementById("senior").checked;
        const military = document.getElementById("military").checked;
        
        let occupancy= 0;
        if (queen) {
            occupancy= 5
        }
        else if (king) {
            occupancy= 2
        }
        else if (suite) {
            occupancy= 7
        }
        else{
            console.log("Invalid Occupancy")
            return false;
        }
       
        let roomPrice= getRoomRate(checkinDate, queen,king,suite);

        
    let discount=0
    if (senior) {
        discount= roomPrice*0.10
    }
    else if (military) {
        discount= roomPrice*0.20
    }
        
    
        let discountedPrice=roomPrice-discount;
        let tax= discountedPrice*0.12;
        let total= discountedPrice+taxes;
        
        
        document.getElementById("original").innerHTML= roomPrice.toFixed(2)
        document.getElementById("discount").innerHTML= discount.toFixed(2)
        document.getElementById("room").innerHTML= discountedPrice.toFixed(2)
        document.getElementById("tax").innerHTML= tax.toFixed(2)
        document.getElementById("total").innerHTML= total.toFixed(2)



    })
)); 
