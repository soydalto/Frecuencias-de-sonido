window.addEventListener("load",iniciar);
document.getElementById('iniciar').addEventListener("click",iniciarFrequency);
document.getElementById("range").addEventListener("change",cambiarFrequency);

function iniciar(){
	try{
       window.AudioContext = window.AudioContext || window.webkitAudioContext;
       context = new AudioContext();
	}
	catch(e){
       alert("La API no funciona, lo siento");
	}
}



function iniciarFrequency(){
	let range = document.getElementById("range").value;
	osc = context.createOscillator();
    osc.frequency.value = range;
    osc.connect(context.destination);
    osc.start(0);
    document.querySelector(".show-Frequency").innerHTML = range + "Hz";
}

function cambiarFrequency(){
	let range = document.getElementById("range").value;
    osc.frequency.value = range;
    document.querySelector(".show-Frequency").innerHTML = range + "Hz";
}