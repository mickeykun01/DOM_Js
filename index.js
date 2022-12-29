// question 1
// document.getElementById("text");

// question 2
// document.getElementsByTagName("h1");

// question 3
// document.getElementsByClassName("box");

// question 4
// function changeText(){
//     let ele1 = document.getElementsByTagName("h3");
//     ele1[0].innerText = "Hello world"
// }

// question 5

function changeDirection(){
    let box1 = document.getElementsByClassName("parent");
    box1[0].style.flexDirection = "column";


    let change = document.getElementsByClassName("child");
    change[0].style.backgroundColor = "tomato";
    change[1].style.backgroundColor = "tomato";
    change[2].style.backgroundColor = "tomato";
    change[0].style.color = "red";
    change[1].style.color = "red";
    change[2].style.color = "red";
}

// question 7
function heading(){
    document.getElementById("colorchange").style.color="red";
}

// question 8
function replace(){
    let result=document.getElementById("Text")
    result[0].innerText="Welcome to Elevation Academy";

}

// question 9
function clock(){
    const date = new Date();
    
    let hours = date.getHours();
    console.log(hours);
    
    const min = date.getMinutes();
    console.log(min);
    
    const sec = date.getSeconds();
    console.log(sec);
    
    let meridian;
    if (hours > 12) {
        meridian = "PM"
        hours -= 12;
    }
    else {
        meridian = "AM"
    }
    
    const hoursSlot = document.getElementsByClassName("hours")
    hoursSlot[0].innerHTML = `${hours} :`;
    
    const minsSlot = document.getElementsByClassName("mins")
    minsSlot[0].innerHTML = `${min} :`;
    
    const secsSlot = document.getElementsByClassName("secs")
    secsSlot[0].innerHTML = sec;
    
    const meridianSlot = document.getElementsByClassName("meridian")
    meridianSlot[0].innerHTML = meridian;
}
    
setInterval(() => {
    clock();
}, 1000);

// question 10

function getOption(){
    var result=document.getElementById("text1");
    var result2=result.value
    document.getElementById("output").innerText=result2
}