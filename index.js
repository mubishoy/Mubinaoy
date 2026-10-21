

let x = 0
let y = 0

let quyon =  document.getElementById("q")
let sabzi =  document.getElementById("s")

// y--top--400 , x--left--500
// y>300 && y<500 && x>450 && x<550

// y--top--300,x--left--600
// y>200 && y<400 && x>550 && x<650

function sabziuchun(){
    if(y>100 && y<300 && x>350 && x<550){

        sabzi.style.top = "400px"
        sabzi.style.left = "500px"
    }
    else if(y>300 && y<500 && x>50 && x<250){
        sabzi.style.top = "300px"
        sabzi.style.left = "500px"
    }

}



function onga() {
    if (x<600) {
        x += 20
        quyon.style.marginLeft = x + "px"
        quyon.style.transform = "rotateY(0deg)"  
        sabziuchun()
    }
}

function chap()
{
    if(x>0)
    {
        x -= 20
      quyon.style.marginLeft = x + "px"
     quyon.style.transform = "rotateY(180deg)"
     sabziuchun()
    }
}
 
function past() {
  if(y<430 ){
      y += 20
 quyon.style.marginTop = y + "px" 
   sabziuchun()
} 

}

    function tepa(){
        if(y>0){
            y -= 20
       quyon.style.marginTop = y + "px"
       sabziuchun()
        }
    }