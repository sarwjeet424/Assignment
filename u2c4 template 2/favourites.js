// write js code here corresponding to favourites.html

var arr1=JSON.parse(localStorage.getItem("favourites")) 

displaydate(arr1)

function displaydate(arr1){
    document.querySelector("tbody").innerHTML=""

   arr1.forEach(function (el,index){
    var e=document.createElement("tr")
    var f=document.createElement("td")
    var g=document.createElement("td")
    var h=document.createElement("td")
    var i=document.createElement("td")
    var j=document.createElement("td")
    var k=document.createElement("td")

    f.innerText=el.matchnu
    g.innerText=el.teama
    h.innerText=el.teamb
    i.innerText=el.dat
    j.innerText=el.ven
    k.innerText="Delete"
    k.style.color="red"

    e.append(f,g,h,i,j,k)
    document.querySelector("tbody").append(e)

    k.addEventListener("click",function(){
        mydel()
    })

})
}

function mydel(el,index){
   arr1.splice(index,1)
   localStorage.setItem("favourites",JSON.stringify(arr1))
   window.location.reload()
}
