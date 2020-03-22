
// var addTaskBtn = document.querySelector('#addTask');

// function currentDayString ()
// {
//     var addTaskBtn=1;
// if (addTaskBtn == 0) {
   
  


  

// addTaskBtn.addEventListener("click", addTaskBtn = 0);

document.getElementById('addTask').onclick = function(){
    document.body.innerHTML+=
    `<section class="card-Preproject">
    <h2> Preproject </h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
    </p>  <a href="" class="button">Learn more</a>
    <a> Download </a>
    </section>`;
} 
var myHeading=document.getElementById('addTask');
myHeading.addEventListener('mouseover',function(evnt){
  document.body.title="Lorem Ipsum is simply dumook a galley of type and scrambled it to make a type specimen book."
    });

    document.getElementById('addTask1').onclick = function(){
      document.body.innerHTML+=
      `          
      <div id="allcontainer">
      <h2> Inittionng</h2> 
  <div class="project-charter">
    <h3> project-charter</h3>
  </div>
  
    <div class="stakeholder-managementplan">
      <h3>stake holder management plan</h3>
  <div class="stakeholder-register">
  <h3>stakeholder-register</h3>
  </div>
  </div>
  
  <div class="statemnt-of-work">
    <h3>statemnt-of-work</h3>
  </div>
  <button> Download </button><button id="hide-1"> Hide </button>
  </div>`;
  document.getElementById('hide-1').onclick = function(){
    alert("zohair")
  } 
}
 