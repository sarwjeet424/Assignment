// write js code here corresponding to matches.html

var arr=JSON.parse(localStorage.getItem("schedule")) 

var arr1=JSON.parse(localStorage.getItem("favourites"))  ||[]

displaydata(arr)

function displaydata(arr){


arr.forEach(function (el){
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
    k.innerText="Add as Favourites"
    k.style.color="green"

    e.append(f,g,h,i,j,k)
    document.querySelector("tbody").append(e)

    k.addEventListener("click",function(){
        myfav(el)
    })

})

document.querySelector("#filterVenue").addEventListener("change",ven)

function ven(){
    var select=document.querySelector("#filterVenue").value
    var filterli=arr.filter(function (el){
        return el.venue==select
    })
    displaydata(filterli)
}

}

function myfav(el){
    arr1.push(el)
    localStorage.setItem("favourites",JSON.stringify(arr1))
}


