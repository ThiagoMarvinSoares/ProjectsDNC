let dia = document.getElementById('dia');
let hora = document.getElementById('hora');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');

const lancamento = '14 jul 2023';

function contagem(){
    const dataLanc = new Date(lancamento);
    const hoje = new Date();
    
    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias) + 'D';
    hora.innerHTML = formatoTempo(finalHoras) + 'H';
    minutos.innerHTML = formatoTempo(finalMinutos) + 'M';
    segundos.innerHTML = formatoTempo(finalSegundos) + 'S';
}

function formatoTempo(tempo){
    return tempo <10? `0${tempo}` : tempo;
}

contagem();
setInterval(contagem, 1000);
