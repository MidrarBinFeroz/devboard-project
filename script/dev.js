const taskdone= document.getElementById('taskDone');
const bgcolor= document.getElementById('bgColor');
const tasknotdone= document.getElementById('taskNotDone');
const btncomp= document.getElementsByClassName('btn-comp');
const activity= document.getElementById('Activity');
const history = document.getElementById('History');

let taskNotDone= 6;
let taskDone=23;

const colors = [
  "#FF5733", 
  "#33FF57", 
  "#3357FF", 
  "#FF33A1", 
  "#A133FF", 
  "#33FFF5",
  "#F5FF33", 
];

function colour(){
  const randCol = Math.floor(Math.random() * colors.length);
  return colors[randCol];
}

bgcolor.addEventListener('click',function(){
  const randCol=colour();
  document.body.style.backgroundColor=randCol
});

for(let i=0; i<btncomp.length; i++){
  btncomp[i].addEventListener('click',function()
    {
      if (btncomp[i].classList.contains('opacity-50'))
        
      return;
      alert("Board Updated Successfully")
      

      btncomp[i].classList.add('opacity-50','cursor-not-allowed');
      btncomp[i].disabled = true;

      taskNotDone--;
      taskDone++;

      tasknotdone.innerHTML= taskNotDone;
      taskdone.innerHTML= taskDone;

      const task = btncomp[i].parentElement.parentElement.querySelector("p.font-medium.text-2xl").innerHTML;
    const time = new Date().toLocaleString();
    activity.innerHTML += `<p>${task} completed at ${time}</p><br>`;
    if(taskNotDone===0)
      {
        alert("All Tasks Completed")
      }
  })
}
history.addEventListener('click',function(){
  activity.innerHTML=""
})