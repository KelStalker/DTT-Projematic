

function ShowFunctionLogin(){
  var x = document.getElementById("nav-3-function");
  
  if (x.style.display === "grid") {
    x.style.display = "none";
   
    
  } else {
    x.style.display = "grid";
  }
}
function ShowFunctionPreproject(){
 
  var x = document.getElementById("pre-project-function");
  
  if (x.style.display === "grid") {
    x.style.display = "none";
   
    
  } else {
    x.style.display = "grid";
  }

}

function ShowFunctionInitiation(){

  
  var x = document.getElementById("inintion-function");
  if (x.style.display === "grid") {
    x.style.display = "none";
   
    
  } else {
    x.style.display = "grid";
  }

}

function ShowFunctionPlanning(){
  var x = document.getElementById("planingGrid-function");
  
  if (x.style.display === "grid") {
    x.style.display = "none";
   
    
  } else {
    x.style.display = "grid";
  }

}

function ShowFunctionExecution(){
  var x = document.getElementById("project-status-function");
  
  if (x.style.display === "grid") {
    x.style.display = "none";
   
    
  } else {
    x.style.display = "grid";
  }

}
function ShowFunctionClosing(){
  var x = document.getElementById("closing-function");
  
  if (x.style.display === "grid") {
    x.style.display = "none";
   
    
  } else {
    x.style.display = "grid";
  }

}

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "dtt" && password == "123"){
alert ("Login successfully");
// popup.classList.toggle("show");
var loginText=document.getElementById("logIn");
var loginForm=document.getElementById("login-id");
var  stakeholderRegister=document.getElementById("stakeholder-register");
var   prujectbudget=document.getElementById("pruject-budget");
var   workbreakgownStructure=document.getElementById("work-breakgown-structure");
var   prujectschedule=document.getElementById("pruject-schedule");
var Riskregister=document.getElementById("Risk-register");
var Communitcuionmatrix=document.getElementById("Communitcuion-matrix");
var ram=document.getElementById("ram");
var changerequest=document.getElementById("change-request");
var Requirmentsmatrix=document.getElementById("Requirments-matrix");
var testscript=document.getElementById("test-script");
var satisfactionAssessment=document.getElementById("satisfaction-Assessment");
var LessonsLearned=document.getElementById("Lessons-Learned");
var statmnetofwork=document.getElementById("statmnet-of-work");
var initiationpopup=document.getElementById("initiationpopup");


loginForm.style.display ="none";
loginText.textContent="signout";
loginText.addEventListener('click',function(evnt){
  reloadThePage()
  });
if ( loginText.textContent=="signout"){
  stakeholderRegister.style.display="block";
  workbreakgownStructure.style.display="block";
  prujectbudget.style.display="block";
  prujectschedule.style.display="block";
  Riskregister.style.display="block";
  Communitcuionmatrix.style.display="block";
  ram.style.display="block";
  changerequest.style.display="block";
  Requirmentsmatrix.style.display="block";
  testscript.style.display="block";
  satisfactionAssessment.style.display="block";
  LessonsLearned.style.display="block";
  statmnetofwork.style.display="block";
  initiationpopup.style.display="none";
}
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have "+attempt+" attempts left;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
 
function reloadThePage(){
  window.location.reload();
} 
function load()
{
  var loginText=document.getElementById("logIn");
  var loginForm=document.getElementById("login-id");
  var  stakeholderRegister=document.getElementById("stakeholder-register");
  var   prujectbudget=document.getElementById("pruject-budget");
  var   workbreakgownStructure=document.getElementById("work-breakgown-structure");
  var   prujectschedule=document.getElementById("pruject-schedule");
  var Riskregister=document.getElementById("Risk-register");
  var Communitcuionmatrix=document.getElementById("Communitcuion-matrix");
  var ram=document.getElementById("ram");
  var changerequest=document.getElementById("change-request");
var Requirmentsmatrix=document.getElementById("Requirments-matrix");
var testscript=document.getElementById("test-script");
var satisfactionAssessment=document.getElementById("satisfaction-Assessment");
var LessonsLearned=document.getElementById("Lessons-Learned");
var statmnetofwork=document.getElementById("statmnet-of-work");
var formcontainerinintion=document.getElementById("formcontainerinintion");
var formcontainerplaning=document.getElementById("formcontainerplaning");
var formcontainerclosing=document.getElementById("formcontainerclosing");





  loginForm.style.display ="none";
  loginText.textContent="signout";
  loginText.addEventListener('click',function(evnt){
    reloadThePage()
    
    });
  if (loginText.textContent=="signout"){
    stakeholderRegister.style.display="block";
    workbreakgownStructure.style.display="block";
    prujectbudget.style.display="block";
    prujectschedule.style.display="block";
    Riskregister.style.display="block";
    Communitcuionmatrix.style.display="block";
    ram.style.display="block";
    changerequest.style.display="block";
    Requirmentsmatrix.style.display="block";
    testscript.style.display="block";
    satisfactionAssessment.style.display="block";
    LessonsLearned.style.display="block";
    statmnetofwork.style.display="block";
    formcontainerinintion.style.display="none";
    formcontainerplaning.style.display="none";
    formcontainerclosing.style.display="none"
  }


}

function ShowFunctionlogin(){
  var x = document.getElementById("login-id");
  
  if (x.style.display === "grid") {
    x.style.display = "none";
   
    
  } else {
    x.style.display = "grid";
  }

}


function myPopupFunctioninintion() {
  document.getElementById("formcontainerinintion").style.display = "block";

}
function myPopupFunctionplaning() {
  document.getElementById("formcontainerplaning").style.display = "grid";
}
function myPopupFunctionclosing(){
  document.getElementById("formcontainerclosing").style.display = "grid";

}


function closeForm(){
  document.getElementById("login-id").style.display = "none";



}