class Event {
  constructor(text, ey, rs, en, rn) {
    this._testo = text;
    this._eventyes = ey;
    this._risorsasi = rs;
    this._eventno = en;
    this._risorsano = rn;
  }
  get testo() {
    return this._te =o;
  }
  get events() {
    return this._eventyes;
  }
  get eventn() {
    return this._eventno;
  }
}

const reloading = () => {
  window.location.reload()
}

let secondi=0;
let minuti=0;
const gameTime = () => {
  secondi+=1;
  if (secondi===60){
    minuti+=1;
    secondi=0;
  }
  document.getElementById('time').innerHTML = minuti + ":" + secondi;
  setTimeout("gameTime()", 1000);
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min)) + min;
}

let sI = "SI"
let nO = "NO"
let gold = 100;
let babbani = 100;
let army = 100;
let meme = 100;

let lista = [];

let avvenimenti = ["Sta andando a fuoco il castello; vigili del fuoco?", "Il re del regno accanto attacca, inviare l'esercito?", "Il re del regno vicino vuole darti in moglie la sua figlia maggiore, accetti le nozze?","Lo pacco ferrato si è rotto, fare tacere il puero?","Sei stato scomunicato dal papa di turno; inviare un messaggiero per chiedere scusa?","Il popolo sta soffrendo per una grande carestia, condivi le provviste del castello?","Una strega arriva nel castello e predice la fine del tuo regno, le credi?","Il giullare di corte ti propone di giocare a dadi, accetti o rifiuti?","Un mago minaccia di mandare una maledizione sul tuo popolo, inviare l'esercito?","Come da tradizione il tuo regno deve organizzare il famoso torneo dei cavalieri, procedere con i preparativi?","Un uomo di nome Cristoforo Piccione si presenta a corte dicendo di essere un esploratore in cerca di finanziamenti per una spedizione, concedergli un finanziamento?","Un uomo di nome Amerigo Apucci si presenta a corte dicendo di essere un esploratore in cerca di finanziamenti per una spedizione, concedergli un finanziamento?"];

let answeryes = [[-25,10],[-30,15],[40,40,40],[-15,1],[-20,10],[-20,30],[-60,20],[-20,+20],[-20,+15],[-15,25],[40,20],[-30,-20]];
let ry = [["g","bb"],["a","bb"],["g","bb","a"],["g","bb"],["g","bb"],["g","bb"],["bb","m"],["g","m"],["a","bb"],["g","bb"],["g","bb"],["g","bb"]];

let answerno = [[-40],[-60],[50],[70,-40],[-25,25],[-50,-20],[15,-20],[-10],[-30,+20],[-40,-20],[-40,-10],[15]];
let rno = [["bb"],["bb"],["m"],["m","g"],["bb","m"],["bb","a"],["bb","m"],["m"],["bb","m"],["m","bb"],["m","bb"],["m"]];

const creaevento =()=> {
  let i;
  for(i=0;i<avvenimenti.length;i++){
    nuovo = new Event (avvenimenti[i], answeryes[i], ry[i], answerno[i], rno[i]);
    lista.push(nuovo);
    
  }
}
let f;
let j;
const effetto =(eve, ans)=> {
  if (ans==="SI"){
    for(f=0;f<eve._eventyes.length;f++){
      if (eve._risorsasi[f]==="g"){
       gold+=eve._eventyes[f];
      }
      else if (eve._risorsasi[f]==="bb"){
        babbani+=eve._eventyes[f];
      }
      else if (eve._risorsasi[f]==="a"){
        army+=eve._eventyes[f];
      }
      else if (eve._risorsasi[f]==="m"){
        meme+=eve._eventyes[f];
      } 
    }
    }
  else if (ans==="NO"){
    for(j=0;j<eve._eventno.length;j++){
      if (eve._risorsano[j]==="g"){
        gold+=eve._eventno[j];
      }
      else if (eve._risorsano[j]==="bb"){
        babbani+=eve._eventno[j];
      }
      else if (eve._risorsano[j]==="a"){
        army+=eve._eventno[j];
      }
      else if (eve._risorsano[j]==="m"){
        meme+=eve._eventno[j];
      }
    }
  }
  lista.splice(nestratto, 1); 
}

let nestratto;

const risposta =(answer)=>{
  effetto(lista[nestratto], answer);  
}

const game =(nome)=>{
  document.getElementById('gold').innerHTML = gold;
  document.getElementById('babbani').innerHTML = babbani;
  document.getElementById('army').innerHTML = army;
  document.getElementById('meme').innerHTML = meme;
  if (gold>0 && babbani>0 && army>0){
    nestratto = getRandomInt(0,lista.length);    
    document.getElementById('situation').innerHTML = lista[nestratto]._testo;
  }
  if(meme<=0){
    document.getElementById('advise').innerHTML = "Il tuo popolo è depresso e ti ha abbandonato, morirai da solo e senza nessuno che ti pianga";
  }
  if(meme>=400){
    document.getElementById('advise').innerHTML = "Per il popolo sei più stupido di una vacca da latte, con un colpo di stato hanno fatto diventare il tuo regno una repubblica!!!";
  }
  if(gold>=300 || babbani>=300 || army>=300){
    document.getElementById('advise').innerHTML = "Bravissimo hai vinto!!! Alessandro Magno sarebbe orgoglioso di te";     
  }
  if(gold<=0 || babbani<=0 || army<=0){
    document.getElementById('gold').innerHTML = gold;
    document.getElementById('babbani').innerHTML = babbani;
    document.getElementById('army').innerHTML = army;
    document.getElementById('meme').innerHTML = meme;
    let advise= "You looose";
    $("#staticBackdrop").modal();
  }
  if(lista.length===0){
    document.getElementById('advise').innerHTML = "Bravissimo hai vinto!!! Alessandro Magno sarebbe orgoglioso di te";
  }
