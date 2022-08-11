function formValid(){
const takeName = document.getElementById("user_name").value;
const takePhone = document.getElementById("user_phoneNumber").value;
const phoneRegEx = /^\d{11}$/;
const location = document.getElementById("location").value;
const takeText = document.getElementById("text_area").value;



localStorage.setItem("takeName", takeName);
localStorage.setItem("takePhone", takePhone);
localStorage.setItem("location", location);
localStorage.setItem("takeText", takeText);





// Name Validation Start
if(takeName.length<4 ){
    document.getElementById("mName").innerHTML= "Your Name is too Short";
    return false;
}
if(takeName.length>30 ){
    document.getElementById("mName").innerHTML= "Your Name is too Large";
    return false;
}
if(takeName.length ==0 ){
    document.getElementById("mName").innerHTML= "Name cannot be Empty";
    return false;
}
if(takeName.length >3 && takeName.length<30 ){
    document.getElementById("mNameGood").innerHTML= "Nice! Looks Good.";
   


}// Name Validation end

//Phone Number Validation
if(!(phoneRegEx.test(takePhone)) ){
document.getElementById("mPhone").innerHTML= "Please Input valid Phone Number.";
return false;
}


let genderMale      = document.getElementById("genderMale").checked;
let genderFemale    = document.getElementById("genderFemale").checked;
let genderIs;

if( genderMale == false && genderFemale == false){
    document.getElementById("mGender").innerHTML = "Please Select your gender.";
    return false;
}
else if(genderMale == true){
    genderIs = "Male";

}
else if(genderFemale == true){
    genderIs = "Female";

}
localStorage.setItem("genderIs", genderIs);

//let nt = document.getElementById("NT").checked;
//let nt = document.querySelector('#NT').checked;
// var nt = document.querySelector('#NT:checked').value;
// localStorage.setItem("nt", nt)

let course=[];
let getValue = document.querySelectorAll('input[type=checkbox]:checked');

for(let i=0;  i<getValue.length; i++){
    course.push(getValue[i].value);
}
let courseToSting = course.toString();
localStorage.setItem("courseToSting", courseToSting);


}