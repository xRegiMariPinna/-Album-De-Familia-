var fotos = ["familia.jpg","irmao.jpg","pai.jpg","dodo.jpg","maee.jpg","euzinhalindamaravilhosa.jpg","belinha.jpg"];
var frases = ["✨My Family!!✨","Bro!!⚡️","Father!!🍁","🌸SISSSS!!🌸","🌹Mamis!🌹","🦋Euzinha!!🦋", "🥑Filha!!🥑"];

var i=1;

function proxima(){
    var numeroFamilia=fotos.length-1;
    if(i > numeroFamilia){
        i=0;
    }
    var updateImage = fotos[i];
    var updateFrases = frases[i];

    document.getElementById("fotos").src=updateImage;
    document.getElementById("legenda").innerHTML=updateFrases;
    i++;
}