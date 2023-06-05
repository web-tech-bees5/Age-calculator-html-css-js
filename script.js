function calculate(){
    setInterval(() =>
    {
let birthdate=new Date(document.getElementById('birthdate').value);
let now= new Date();
let ageinms=now.getTime() - birthdate.getTime(); 
let ageins=ageinms / 1000;
let ageinm=ageins / 60;
let ageinhours=ageinm / 60;
let ageindate=ageinhours / 24;
let ageinmonth=ageindate / 30.4375;
let ageinyear=ageinmonth / 12;

document.querySelector('#years').innerHTML=Math.floor(ageinyear);
document.querySelector('#month').innerHTML=Math.floor(ageinmonth % 12);
document.querySelector('#days').innerHTML=Math.floor(ageindate % 30.4375);
document.querySelector('#hours').innerHTML=Math.floor(ageinhours % 24);
document.querySelector('#minutes').innerHTML=Math.floor(ageinm % 60);
document.querySelector('#seconds').innerHTML=Math.floor(ageins % 60);
document.querySelector('#seconds').style.borderBottom = '1px grey solid'



    },1000);
}
function reset()
{
    window.location.reload();
}