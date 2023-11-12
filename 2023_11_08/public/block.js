form = document.getElementById("f1")
console.log(form)
if(form){
    form.addEventListener("submit",(e)=>{
        alert("Nie udało się wysłać wiadomości")
        e.preventDefault()
    })
}