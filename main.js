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

}