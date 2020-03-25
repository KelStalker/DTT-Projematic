// document.getElementById('Preproject').onclick = function(){
//     document.body.innerHTML+=
//     `<section class="card-Preproject">
//     <h2> Preproject </h2>
//     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//     orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
//     orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
//     orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
//     </p>  <a href="" class="button">Learn more</a>
//     <a> Download </a>
//     </section>`;
// } 
// var myHeading=document.getElementById('Preproject');
// myHeading.addEventListener('mouseover',function(evnt){
//   document.body.title="Lorem Ipsum is simply dumook a galley of type and scrambled it to make a type specimen book."
//     });

//     document.getElementById('Initiation').onclick = function(){
//       document.body.innerHTML+=
//       `      <div class="inintionGrid">
//       <div id="project-charter"><a href=""> project-charter</a></div>
//       <div id="stakeholder-managementplan"><a href=""> stake holder management plan</a></div>
//       <!-- <div id="stakeholder-register"><a href=""> stakeholder-register</a></div> -->
//       <a href="#" id="hide-inintionGrid">Hide</a>
//   </div>      
//    `;
//   document.getElementById('hide-1').onclick = function(){
//     alert("zohair")
//   } 

// document.getElementById('Planning').onclick = function(){
//   document.body.innerHTML+=
//   `      <div class="planingGrid">

//   <div id="Project-managemnet-plan"><a href="">Project managemnet plan</a></div>
//   <div id="Scope-managemnet-plan"><a href="#"> Scope managemnet plan </a></div>
//   <div id="Cost-managemnet-plan"><a href="#"> Cost managemnet plan </a></div>
//   <div id="Schdule-managemnet-plan"><a href="#">Schdule managemnet plan</a></div>
//   <div id="Risk-managemnet-plan"><a href="#">Risk managemnet plan</a></div>
//   <div id="Communitcuion-managemnet-plan"><a href="#">Communitcuion managemnet plan </a></div>
//   <div id="resource-managemnet-plan"><a href="#">Resource managemnet plan </a></div>
//   <div id="procurement-managemnet-plan"><a href="#">procurement managemnet plan </a></div>
//   <div id="Quality-managemnet-plan"><a href="#">Quality managemnet plan </a></div>
//   <div id="Test-managemnet-plan"><a href="#">Test managemnet plan </a></div>
//   <div id="change-managemnet-plan"><a href="#">change managemnet plan </a></div>
//   <div id="Implementation-managemnet-plan"><a href="#">Implementation managemnet plan </a></div>
//   <div id="Traning-managemnet-plan"><a href="#">Traning managemnet plan </a></div>
//      <a href="#" id="hide-inintionGrid" onclick="hideFunction()">Hide</a>
// </div>   
// `;

// } 

//  function hideFunction() {
//   var x = document.getElementsByClassName("planingGrid");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function ShowFunctionPlanning() {
//   var x = document.getElementById("planingGrid");
//   if (x.style.display === "none") {
//     x.style.display = "block";
   
    
//   } else {
//     x.style.display = "none";
//   }
// }
// function getStyleSheet(unique_title) {
//   for(var i=0; i<document.styleSheets.length; i++) {
//     var sheet = document.styleSheets[i];
//     if(sheet.title == unique_title) {
//       return sheet;
//     }
//   }
// }
// mouseOver.addEventListener('mouseover',function(evnt){
//   this.className= 'planingGrid';
//   });

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

function ShowFunctioncompare()
{
  var psw1 = document.getElementById("psw");
  var uname1 = document.getElementById("uname");
    if(uname1=="workshop" && psw1=="workshop"){
      // load("3planning.html");  
      }
    else

    {
      load("login.html");
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

  }



}

function ShowFunctionlogin(){
  var x = document.getElementById("login-id");
  
  if (x.style.display === "none") {
    x.style.display = "grid";
   
    
  } else {
    x.style.display = "none";
  }
}

