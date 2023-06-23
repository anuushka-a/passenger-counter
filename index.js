
let countEl= document.getElementById("count-el")
let count=0
let saveEl= document.getElementById("save-el")



function increment(){
    ++count
    countEl.innerText=count
    console.log(count)
}

function decrement(){
    if(count != 0){
        --count
        countEl.innerText=count
        console.log(count)
    }
}

function save(){
    let saveLog = count + ", "
    saveEl.innerText += saveLog 
    console.log(saveLog)
}

function reset(){
    countEl.innerText= 0
    count = 0
    saveEl.innerText = "previous entries: "
    console.log(count)
    console.log(saveLog)
}