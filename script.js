class Event {
  constructor(text, ey, rs, en, rn) {
    this._text = text;
    this._eventyes = ey;
    this._resourceyes = rs;
    this._eventno = en;
    this._resourceno = rn;
  }
}

const reloading = () => {
  window.location.reload()
}

let seconds=0;
let minutes=0;
const gameTime = () => {
  seconds+=1;
  if (seconds===60){
    minutes+=1;
    seconds=0;
  }
  if (seconds<10){
  document.getElementById('time').innerHTML = minutes + ":" + "0" + seconds;
  } else {
  document.getElementById('time').innerHTML = minutes + ":" + seconds;
  }
  setTimeout("gameTime()", 1000);
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random()*(max - min))+ min;
}
let yeS = "SI"
let nO = "NO"
let gold = 100;
let babbani = 100;
let army = 100;
let meme = 100;
let eventList = [];
let avvenimenti = ["Sta andando a fuoco il castello; vigili del fuoco?", "I parmigiani sono penetrati fino a Bibbiano, inviare l'esercito?", "Il duca di Mantova vuole darti in moglie la sua figlia maggiore (rifiutare potrebbe scatenare una guerra), accetti le nozze?","Lo pacco ferrato si è rotto, fare tacere 'al putein'?","Sei stato scomunicato dal papa di turno; inviare un messaggero per chiedere scusa?","Il popolo sta soffrendo per una grande carestia, distribuire il Parmigiano-Reggiano delle riserve?","Una strega arriva nel castello e predice la fine di Reggio Emilia, le credi?","Il giullare di corte ti propone di giocare a pataia, accetti o rifiuti?","Un mago minaccia di mandare una maledizione sul tuo popolo, inviare l'esercito?","Come da tradizione si deve organizzare il famoso Corteo Matildico a Quattro Castella, procedere con i preparativi?","Un uomo di nome Cristoforo Piccione si presenta a corte dicendo di essere un esploratore in cerca di finanziamenti per una spedizione in Garfagnana, concedergli un finanziamento?","Un uomo di nome Amerigo Apucci si presenta a corte dicendo di essere un esploratore in cerca di finanziamenti per una spedizione nella bassa mantovana, concedergli un finanziamento?","Esondazione dell'Enza, concedere i sussidi?","I modenesi tentano l'invasione, contrattaccare?","Cadelbosco di Sotto attacca Cadelbosco di Sopra, fermare la rivolta?","Un esercito non è mai troppo grande, vuoi finanziare l'accademia militare?","La comunità della Val d'Enza chiede la costruzione di una ferrovia da Reggio a Ciano, consentire la realizzazione?","Il confine verso Parma è il più debole del regno vuoi aumentare le difese? ","Uno dei tuoi conti ti dice: 'Vatl a tor in dal cul'; cosa rispondi?", "Stiamo esaurendo le riserve di erbazzone, aumentare la produzione?", "Un esercito di lanzichenecchi si sta avvicinando verso Reggio Emilia chiedendo viveri per rifocillarsi, li vuoi aiutare?","In un convento in campagna si sta espandendo una strana epidemia che fa credere ai contagiati di essere dei cingiali, vuoi fare intervenire l'esercito?","Un uomo con uno strano accento arriva a corte sostenendo di possedere delle informazioni su una nuova arma creata dai modenesi, vuoi pagarlo per ottenere le informazioni?","Le punghe stanno invadendo la campagna e distruggendo il raccolto, vuoi intervenire?","Un'insegnante arriva infuriata a corte sostenendo che si dica 'lo gnocco' invece che 'il gnocco', le dai ragione?","Un contadino corre a corte rivelandoti di credere di avere visto l'abominevole uomo di Grassano (il terribile mostro delle leggende), gli credi e lo aiuti?","Viene portata in tribunale una donna chiamata Leonarda Cianciulli soprannominata la saponificatrice con l'accusa di essere una serial killer,credi che sia innocente?","Un casaro viene a corte chiedendo un prestito per comprare delle vacche rosse per aumentare la produzione del proprio caseificio, concedere il prestito?","Il papa ti chiede di fornire degli uomini per una nuova crociata, inviare le truppe di supporto?","Stai guardando il cielo e ad un certo punto vedi una nuvola a forma di impala.","Il barone di Modena ti propone di bere un bicchiere di vino insieme, accettare l'offerta?","Ti propongono una gita alle casse di espansione della ridente città industriale di Rubiera, accettare la gentile offerta?","Buona parte del tuo popolo è contro le torture che usi sui prigionieri, vuoi seguire la volontà del tuo popolo?","La contessa Matilde di Canossa ti propone un'alleanza militare, accettare l'offerta?","Sembra che alcuni minatori abbiano trovato una miniera d'oro, vuoi scavare di più?","Uno scienziato viene a corte proponendoti di creare un museo per acculturare il popolo, vuoi fondare i Musei Civici?","Una nave di mercanti è attraccata sulle rive del Crostolo, tuttavia i membri dell'equipaggio non smettono mai di tossire, vuoi fare entrare i mercanti a Reggio Emilia?","Un tuo latifondista ti dice: c'at gnèssa 'na pujìda! lo ringrazi?","Una guardia arriva tutta spaventata al tuo cospetto dicendoti di avere sentito dei rumori sospetti la scorsa notte, aumentare le difese?"];

let answeryes = [[-25,10],[-30,15],[40,40,40],[-15,15],[-20,10],[-30,30],[-60,20],[-20,+20],[-20,+15],[-15,25],[40,20],[-30,-20],[-25,+30],[20,-15],[-10,15],[-20,60],[-10,30,50],[-15,40], [-15,-15,-15,30], [-15, 10, 10, 10], [-20, 30],[-10,20,20],[-35,25],[-10,10,10,10],[-10,30],[-20,-25,40],[-25,20],[-25,20],[-30,50,25],[-20,20,-20,20],[-20],[-15,15,40],[10,-10],[-25,30],[-20,20],[-30,15,15],[-20,15],[-20,-20,-20,40],[-40,40]];

let ry = [["g","bb"],["a","bb"],["g","bb","a"],["g","bb"],["g","bb"],["g","bb"],["bb","m"],["g","m"],["a","bb"],["g","bb"],["g","bb"],["g","bb"],["g","bb"],["bb","a"],["a","g"],["g","a"],["g","bb","m"],["g","a"],["g","a","bb","m"],["g","a","bb","m"],["g","a"],["a","bb","m"],["g","a"],["a","g","bb","m"],["bb","m"],["g","a","m"],["bb","m"],["g","bb"],["a","g","m"],["g","bb","a","m"],["g"],["g","bb","m"],["bb","a"],["g","a"],["bb","g"],["g","bb","m"],["bb","g"],["bb","g","a","m"],["g","a"]];

let answerno = [[-40],[-60],[-20,-20,50],[50,-40],[-25,25],[-50,-20],[15,-20],[-10],[-30,+20],[-40,-20],[-40,-10],[15],[-30,20],[20,10],[15,-30],[5,5],[-30,-50],[-20,-10],[15,15,15],[-25, -40],[-10,-10,-10],[-40,-20],[-10],[-30,-20],[20,20,20],[10,-10],[15,15],[-30,-10],[-20,-25],[20,-20,20,-20],[20],[10,-20,-50],[-20,20],[-15,10],[-30,15],[-20,20,-20],[15,15,-20],[15,15,15],[-20,10,-10,20]];

let rno = [["bb"],["bb"],["g","bb","m"],["m","g"],["bb","m"],["bb","a"],["bb","m"],["m"],["bb","m"],["m","bb"],["m","bb"],["m"],["bb","m"],["m","a"],["a","bb"],["m","bb"],["m","bb"],["bb","g"],["g","bb","m"],["bb","m"],["g","a","bb"],["bb","m"],["a"],["g","m"],["g","a","bb"],["a","m"],["bb","a"],["m","bb"],["bb","a"],["g","bb","a","m"],["g"],["g","bb","m"],["bb","a"],["bb","g"],["g","bb"],["bb","a","m"],["bb","a","g"],["g","a","bb"],["bb","g","a","m"]];

const creaevento =()=> {
  let i;
  for(i=0;i<avvenimenti.length;i++){
    newEvent = new Event (avvenimenti[i], answeryes[i], ry[i], answerno[i], rno[i]);
    eventList.push(newEvent);
  }
}
let f;
let j;
const effetto =(eve, ans)=> {
  if (ans==="SI"){
    for(f=0;f<eve._eventyes.length;f++){
      if (eve._resourceyes[f]==="g"){
       gold+=eve._eventyes[f];
      }
      else if (eve._resourceyes[f]==="bb"){
        babbani+=eve._eventyes[f];
      }
      else if (eve._resourceyes[f]==="a"){
        army+=eve._eventyes[f];
      }
      else if (eve._resourceyes[f]==="m"){
        meme+=eve._eventyes[f];
      } 
    }
  } 
  else if (ans==="NO"){
    for(j=0;j<eve._eventno.length;j++){
      if (eve._resourceno[j]==="g"){
        gold+=eve._eventno[j];
      }
      else if (eve._resourceno[j]==="bb"){
        babbani+=eve._eventno[j];
      }
      else if (eve._resourceno[j]==="a"){
        army+=eve._eventno[j];
      }
      else if (eve._resourceno[j]==="m"){
        meme+=eve._eventno[j];
      }
    }
  }
  eventList.splice(nestratto, 1); 
}
let nestratto;
const risposta =(answer)=>{
  effetto(eventList[nestratto], answer);  
}
const game =(nome)=>{
  move("myBarGold", gold);
  move("myBarBabbani", babbani);
  move("myBarArmy", army);
  move("myBarMeme", meme);
  if(meme<=0){
    $("#staticBackdropmp").modal()
  }
  if(meme>=300){
    $("#staticBackdropmt").modal();
  }
  if(gold>=300 || babbani>=300 || army>=300){ 
    $("#staticBackdropw").modal();  
  }
  if(gold<=0 || babbani<=0 || army<=0){
    $("#staticBackdropl").modal();
  }
  if(eventList.length===0){
    $("#staticBackdropw").modal();
  }
  if (gold>0 && babbani>0 && army>0){
    nestratto = getRandomInt(0,eventList.length);    
    document.getElementById('situation').innerHTML = eventList[nestratto]._text;
  }
  gold+=10;
}


const move=(bar, material)=> {
  let elem = document.getElementById(bar);
  let finalValue = Math.round((material/300)*100);
  let width = 0;
  if (finalValue<0){
    width = 0;
  } 
  else if (finalValue>100){
    width = 100;
  } 
  else {
    width = finalValue;
  }
  elem.style.width = width + "%";
  elem.innerHTML = width + "%";
}
