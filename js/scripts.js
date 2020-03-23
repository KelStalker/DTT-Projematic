

document.getElementById('Preproject').onclick = function(){
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
var myHeading=document.getElementById('Preproject');
myHeading.addEventListener('mouseover',function(evnt){
  document.body.title="Lorem Ipsum is simply dumook a galley of type and scrambled it to make a type specimen book."
    });

    document.getElementById('Initiation').onclick = function(){
      document.body.innerHTML+=
      `      <div id="inintionGrid">
      <div id="project-charter"><a href=""> project-charter</a></div>
      <div id="stakeholder-managementplan"><a href=""> stake holder management plan</a></div>
      <!-- <div id="stakeholder-register"><a href=""> stakeholder-register</a></div> -->
      <a href="#" id="hide-inintionGrid">Hide</a>
  </div>      
   `;
  document.getElementById('hide-1').onclick = function(){
    alert("zohair")
  } 
}
document.getElementById('Planning').onclick = function(){
  document.body.innerHTML+=
  `      <div id="planingGrid">

  <div id="Project-managemnet-plan"><a href="">Project managemnet plan</a></div>
  <div id="Scope-managemnet-plan"><a href="#"> Scope managemnet plan </a></div>
  <div id="Cost-managemnet-plan"><a href="#"> Cost managemnet plan </a></div>
  <div id="Schdule-managemnet-plan"><a href="#">Schdule managemnet plan</a></div>
  <div id="Risk-managemnet-plan"><a href="#">Risk managemnet plan</a></div>
  <div id="Communitcuion-managemnet-plan"><a href="#">Communitcuion managemnet plan </a></div>
  <div id="resource-managemnet-plan"><a href="#">Resource managemnet plan </a></div>
  <div id="procurement-managemnet-plan"><a href="#">procurement managemnet plan </a></div>
  <div id="Quality-managemnet-plan"><a href="#">Quality managemnet plan </a></div>
  <div id="Test-managemnet-plan"><a href="#">Test managemnet plan </a></div>
  <div id="change-managemnet-plan"><a href="#">change managemnet plan </a></div>
  <div id="Implementation-managemnet-plan"><a href="#">Implementation managemnet plan </a></div>
  <div id="Traning-managemnet-plan"><a href="#">Traning managemnet plan </a></div>
     <a href="#" id="hide-inintionGrid" onclick="hideFunction()">Hide</a>
</div>   
`;

} 

 function hideFunction() {
  var x = document.getElementById("planingGrid");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// function ShowFunction() {
//   var x = document.getElementById("hidew");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//     document.body.innerHTML=
//   ` <div id="planingGrid">
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
    
//   } else {
//     x.style.display = "none";
//   }
// }