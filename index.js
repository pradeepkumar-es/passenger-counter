// document.getElementById("count-el").innerText="5";
let count=0;
function increment (){
    // count=count+1
    //short cut
//    count+=1;
   count +=1;
    document.getElementById("count-el").textContent=count;
}
function save () {
    let countString = count;
    let saveEl= document.getElementById("save-el");
    // saveEl.innerText+=count+" - "; //not showing gap after dash with innerText
    saveEl.textContent+=countString+" - "; //problem solved with textContent
    // console.log(count=0);
    document.getElementById("count-el").textContent=0; //setting back to 0 after clicking save
    /*since count is saved to present count incremented value hence
    we have required to also set it to 0 to increment from 0 not from 
    from current value of count*/
    count=0;
}
let welcomeEl = document.getElementById("welcome-el");
let hey="Hey, "
let greeting = "Welcome Back"

let day = new Date();  //all thing related to time & date 
let timeOfDay = day.getHours(); //only hours
let salutation
if(timeOfDay>4 && timeOfDay<12 ){
    salutation = "Good Morning! "
}else if(timeOfDay>12 && timeOfDay<18){
    salutation = "Good Afternoon! "
}else{
    salutation ="Hope Night are going well! "
}
welcomeEl.innerText= hey + salutation +greeting;
let emoji = " 👋";
// welcomeEl.innerText = welcomeEl.innerText + emoji; 
//shortcut of above =>   += operator
welcomeEl.innerText+=emoji;