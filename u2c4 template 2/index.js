// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",forms)

var arr=JSON.parse(localStorage.getItem("schedule")) || []
function forms(){
    event.preventDefault()
    var a=document.querySelector("#matchNum").value
    var b=document.querySelector("#teamA").value
    var c=document.querySelector("#teamB").value
    var d=document.querySelector("#date").value
    var e=document.querySelector("#venue").value
    var obj={
       matchnu:a,
       teama:b,
       teamb:c,
       dat:d,
       ven:e,
    }
    arr.push(obj)
    localStorage.setItem("schedule",JSON.stringify(arr))
    console.log(arr)
}