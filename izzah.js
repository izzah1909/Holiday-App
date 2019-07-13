function showTaraweeh() {
    let when= "When: Only during Ramadhan, after Isyak prayer and before Witr.";
    document.getElementById("card1").innerHTML = when;
    let how= "How: Niyyah followed by the recitation of Surah Al-Fatihah and verses of the Quran in every rakaah, just like normal prayers. Performed in pairs.";
    document.getElementById("card2").innerHTML = how;
    let howLong= "How long: 2 rakaats at the least.";
    document.getElementById("card3").innerHTML = howLong;
    let rasul= "So how many rakaats did The Prophet pray? 8 rakaats, but he performed it with utmost perfection. It is stated in a hadith: (The Prophet performed 8 rakaats. He did not pray more than eleven rakaat in Ramadan or in any other month. He used to pray four rakaat, let alone their beauty and length and then he would pray four, let alone their beauty and length and then he would pray three rakat (witr).)"
    document.getElementById("card4").innerHTML = rasul;
}
function showWitr() {
    let when= "When: After Isyak and lasts until dawn begins. If a person thinks he will be able to get up at the end of the night, it is better to delay it. But whoever fears that he will not get up at the end of the night should pray Witr before he goes to sleep. If he is performing taraweeh, he should perform Witr after Taraweeh. ";
    document.getElementById("card1").innerHTML = when;
    let how= "How: Niyyah followed by the recitation of Surah Al-Fatihah and verses of the Quran in every rakaah, just like normal prayers. ";
    document.getElementById("card2").innerHTML = how;
    let howLong= "How long: The minimum number of rakaats for Witr is one rakaah. But Witr may also be three or five or seven or nine or eleven.  ";
    document.getElementById("card3").innerHTML = howLong;
    let message= "Click on a prayer button to know more!";
    document.getElementById("card4").innerHTML=message;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function printHamid() {
    let hamid = "10 Gentle Rd, Singapore 309194";
    document.getElementById("card5").innerHTML = hamid;
    
}
function printIbrahim() {
    let ibrahim = "15 Jln Ulu Seletar, Singapore 769227";
    document.getElementById("card5").innerHTML = ibrahim;
}
function printIstiqamah() {
    let istiqamah= "2 Serangoon North Ave 2, Singapore 555876";
    document.getElementById("card5").innerHTML = istiqamah;
}
function printAlkaff() {
    let alkaff= "66 Pheng Geck Ave, Singapore 348261";
    document.getElementById("card5").innerHTML=alkaff;
}
function printMuttaqin() {
    let muttaqin= "5140 Ang Mo Kio Ave 6, Singapore 569844";
    document.getElementById("card5").innerHTML=muttaqin;
}
function printNahdhah() {
    let nahdhah="9A Bishan Street 14, Singapore 579786";
    document.getElementById("card5").innerHTML=nahdhah;
}
function printNur() {
    let nur= "6 Admiralty Rd, Singapore 739983";
    document.getElementById("card5").innerHTML=nur;
}
function printAssyafaah() {
    let assyafaah= "1 Admiralty Ln, Assyafaah Mosque, Singapore 757620";
    document.getElementById("card5").innerHTML= assyafaah;
}
function printMakmur() {
    let makmur= "950 Yishun Ave 2, Singapore 769099";
    document.getElementById("card5").innerHTML=makmur;
}
function printYusoff() {
    let yusoff= "2 Hillside Dr, Singapore 548920";
    document.getElementById("card5").innerHTML= yusoff;
}
function printRahimabi() {
    let rahimabi= "76 Kim Keat Road,Singapore 328835";
    document.getElementById("card5").innerHTML= rahimabi;
}
function printMuhajirin() {
    let muhajirin= "275 Braddell Rd, Singapore 579704";
    document.getElementById("card5").innerHTML=muhajirin;
}
function printSalmah() {
    let salmah= "411 Jln Mashhor, Singapore 299173";
    document.getElementById("card5").innerHTML= salmah;
}
function printSembawang() {
    let sembawang= "27B Jln Mempurong, Singapore 759055";
    document.getElementById("card5").innerHTML= sembawang;
}
function printIshak() {
    let ishak= "10 Woodlands Drive 17, Singapore 737740";
    document.getElementById("card5").innerHTML= ishak;
}




function printGafoor() {
    let gafoor = "41 Dunlop St, Singapore 209369";
    document.getElementById("card5").innerHTML = gafoor;
    
}
function printAbrar() {
    let abrar = "192 Telok Ayer St, Singapore 068635";
    document.getElementById("card5").innerHTML = abrar;
}
function printFalah() {
    let falah= "22 Bideford Rd, Singapore 229923";
    document.getElementById("card5").innerHTML = falah;
}
function printAnggulia() {
    let anggulia= "265 Serangoon Rd, Singapore 218099";
    document.getElementById("card5").innerHTML=anggulia;
}
function printBaalwie() {
    let baalwie= "2 Lewis Rd, Singapore 258590";
    document.getElementById("card5").innerHTML=baalwie;
}
function printNahdhah() {
    let nahdhah="9A Bishan Street 14, Singapore 579786";
    document.getElementById("card5").innerHTML=nahdhah;
}
function printBencoolen() {
    let bencoolen= "51 Bencoolen St, Singapore 189630";
    document.getElementById("card5").innerHTML=bencoolen;
}
function printBurhani() {
    let burhani= "39 Hill St, Singapore 179364";
    document.getElementById("card5").innerHTML= burhani;
}

function printSalleh() {
    let salleh= "37 Palmer Rd, Singapore 079424";
    document.getElementById("card5").innerHTML= salleh;
}
function printFatimah() {
    let fatimah= "4001 Beach Rd, Singapore 199584";
    document.getElementById("card5").innerHTML= fatimah;
}
function printJamae() {
    let jamae= "218 South Bridge Rd, Singapore 058767";
    document.getElementById("card5").innerHTML=jamae;
}
function printQueenstown() {
    let queenstown= "801 Margaret Dr, Singapore 149307";
    document.getElementById("card5").innerHTML= queenstown;
}
function printJamiyah() {
    let jamiyah= "601 Tiong Bahru Rd, Singapore 158787";
    document.getElementById("card5").innerHTML= jamiyah;
}
function printDelta() {
    let delta= "10 Delta Ave, Singapore 169831";
    document.getElementById("card5").innerHTML= delta;
}
function printMalabar() {
    let malabar = "471 Victoria St, Singapore 198370";
    document.getElementById("card5").innerHTML = malabar;
    
}
function printMoulana() {
    let moulana = "80 Raffles Place, #B1-01 I UOB Plaza, Singapore 048624";
    document.getElementById("card5").innerHTML = moulana;
}
function printMujahidin() {
    let mujahidin= "590 Stirling Rd, Singapore 148952";
    document.getElementById("card5").innerHTML = mujahidin;
}
function printMelaka() {
    let melaka= "10 Keng Cheow St, Singapore 059607";
    document.getElementById("card5").innerHTML=melaka;
}
function printSultan() {
    let sultan= "3 Muscat St, Singapore 198833";
    document.getElementById("card5").innerHTML=sultan;
}
function printTasek() {
    let tasek="46 Bristol Rd, Singapore 219852";
    document.getElementById("card5").innerHTML=tasek;
}




function printAleem() {
    let aleem = "No. 90 Lorong K, Telok Kurau Road, 425723";
    document.getElementById("card5").innerHTML = aleem;
    
}
function printRazak() {
    let razak = "30 Jln Ismail, Singapore 419285";
    document.getElementById("card5").innerHTML = razak;
}
function printAnsar() {
    let ansar= "155 Bedok North Ave 1, Singapore 469751";
    document.getElementById("card5").innerHTML = ansar;
}
function printIslah() {
    let islah= "30 Punggol Field, Singapore 828812";
    document.getElementById("card5").innerHTML=islah;
}
function printIstighfar() {
    let istighfar= "2 Pasir Ris Walk, Singapore 518239";
    document.getElementById("card5").innerHTML=istighfar;
}
function printMawaddah() {
    let mawaddah="151 Compassvale Bow, Singapore 544997";
    document.getElementById("card5").innerHTML=mawaddah;
}
function printMelayu() {
    let melayu= " 200 Bedok Reservoir Rd, Singapore 479221";
    document.getElementById("card5").innerHTML=melayu;
}
function printTaqua() {
    let taqua= "11A Jln Bilal, Singapore 468862";
    document.getElementById("card5").innerHTML= taqua;
}

function printAman() {
    let aman= "1 Jln Eunos, Singapore 419493";
    document.getElementById("card5").innerHTML= aman;
}
function printGhufran() {
    let ghufran= "503 Tampines Ave 5, Singapore 529651";
    document.getElementById("card5").innerHTML= ghufran;
}
function printMohd() {
    let mohd= "245 Geylang Rd, Singapore 389304";
    document.getElementById("card5").innerHTML=mohd;
}
function printSiglap() {
    let siglap= "451 Marine Parade Rd, Singapore 449283";
    document.getElementById("card5").innerHTML= siglap;
}
function printKassim() {
    let kassim= "450 Changi Rd, Singapore 419877";
    document.getElementById("card5").innerHTML= kassim;
}
function printKhadijah() {
    let khadijah= "583 Geylang Rd, Singapore 389522";
    document.getElementById("card5").innerHTML= khadijah;
}
function printKhalid() {
    let khalid = "130 Joo Chiat Rd, Singapore 427727";
    document.getElementById("card5").innerHTML = khalid;
    
}
function printMydin() {
    let mydin = " 67 Jln Lapang, Singapore 419007";
    document.getElementById("card5").innerHTML = mydin;
}
function printMujahidin() {
    let mujahidin= "590 Stirling Rd, Singapore 148952";
    document.getElementById("card5").innerHTML = mujahidin;
}
function printMattar() {
    let mattar= "1 Mattar Rd, Singapore 387713";
    document.getElementById("card5").innerHTML=mattar;
}
function printWktg() {
    let wktg= "25 Paya Lebar Rd, Singapore 409004";
    document.getElementById("card5").innerHTML=wktg;
}



function printAhmad() {
    let ahmad = "2 Lor Sarhad, Singapore 119173";
    document.getElementById("card5").innerHTML = ahmad;
    
}
function printFirdaus() {
    let firdaus = "11 Jalan Ibadat, Singapore 698955";
    document.getElementById("card5").innerHTML = firdaus;
}

function printIman() {
    let iman= "10 Bukit Panjang Ring Rd, Singapore 679943";
    document.getElementById("card5").innerHTML = iman;
}
function printHuda() {
    let huda= "34 Jln Haji Alias, Singapore 268534";
    document.getElementById("card5").innerHTML=huda;
}
function printKhair() {
    let khair= "1 Teck Whye Cres, Singapore 688847";
    document.getElementById("card5").innerHTML=khair;
}
function printMukminin() {
    let mukminin="271 Jurong East Street 21, Singapore 609603";
    document.getElementById("card5").innerHTML=mukminin;
}
function printRaudhah() {
    let raudhah= "30 Bukit Batok East Ave 2, Singapore 659919";
    document.getElementById("card5").innerHTML=raudhah;
}
function printAssyakirin() {
    let assyakirin= "550 Yung An Rd, Singapore 618617";
    document.getElementById("card5").innerHTML= assyakirin;
}

function printDarussalam() {
    let darussalam= "3002 Commonwealth Ave W, Singapore 129579";
    document.getElementById("card5").innerHTML= darussalam;
}
function printJebat() {
    let jebat= "100 Jln Hang Jebat, Singapore 139520";
    document.getElementById("card5").innerHTML= jebat;
}
function printHasanah() {
    let hasanah= "492 Teban Gardens Rd, Singapore 608878";
    document.getElementById("card5").innerHTML=hasanah;
}
function printHussain() {
    let hussain= "394 Pasir Panjang Rd, Singapore 118730";
    document.getElementById("card5").innerHTML= hussain;
}
function printMaarof() {
    let maarof= "20 Jurong West Street 26, Singapore 648125";
    document.getElementById("card5").innerHTML= maarof;
}
function printBukom() {
    let bukom= "Pulau Bukom P O Box 1908";
    document.getElementById("card5").innerHTML= bukom;
}
function printPusara() {
    let pusara = "11 Lim Chu Kang Rd, Singapore 719452";
    document.getElementById("card5").innerHTML = pusara;
    
}
function printTentera() {
    let tentera = "81 Clementi Rd, Singapore 129797";
    document.getElementById("card5").innerHTML = tentera;
}

let currentRandomNumber = 0;

const quotes = [
  {
    author: 'Prophet Muhammad PBUH',
    message: 'When Ramadan enters, the gates of Paradise are opened, the gates of Hellfire are closed and the devils are chained.',
  },
  {
    author: 'Prophet Muhammad PBUH',
    message: '(The performance of) `Umrah during Ramadan is equal (in reward) to performing Hajj with me.',
  },
  {
    author: 'Prophet Muhammad PBUH',
    message: 'There are two occasions of joy for a fasting person: one when he breaks his fast, and the other when he meets his Lord',
  },
  {
    author: 'Prophet Muhammad PBUH',
    message: 'Whoever fasts in Ramadan and then follows it with fasting six days of Shawwal, it is as if he fasts forever.',
  },
  {
    author: 'Prophet Muhammad PBUH',
    message: 'The (bad) breath (of a fasting person) is better in the sight of Allah than the fragrance of musk.',
  },
];

function getNextQuote(){
  const quote = getRandomQuote();

  setAuthor(quote.author);
  setMessage(quote.message);
}

function setAuthor(author){
  setInnerHTMLOfElementById('author', author)
}

function setMessage(message){
  setInnerHTMLOfElementById('message', message);
}

function setInnerHTMLOfElementById(elementId, innerHtml){
  document.getElementById(elementId).innerHTML = innerHtml;
}

function getRandomQuote(){
  const randomNumber = getRandomNumber();

  return quotes[randomNumber];
}


function getRandomNumber(){
  const randomNumber = getRandomArbitrary(0, quotes.length);
  if(randomNumber === currentRandomNumber){
    return getRandomNumber();
  }

  currentRandomNumber = randomNumber;
  return randomNumber;

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

