var actual = new Date();
console.log(actual);

var btnEdad = document.getElementById("btnEdad");

btnEdad.onclick = function (evt) {     
    let cumpleannios = new Date(document.getElementById('textMsj').value);         
    console.log(cumpleannios);
    let annios = (actual - cumpleannios) / 31556900000;        
    let msj = document.getElementById('showMsj');
    msj.innerText = `Tu edad es: ${Math.trunc(annios)}`
    msj.style.color = "#FF0000";
};