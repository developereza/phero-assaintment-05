document.getElementById('special-date').innerText = Date();

document.getElementById('new-page').addEventListener('click', function () {
    window.location.href = "questions.html"
});


document.getElementById('btn-mobile').addEventListener('click', function () {
    numberChange();
    btnDisable('btn-mobile');
    alert('Board updated successfully');
    let container = document.getElementById('update-container');
    let div = document.createElement('div');
    const titleText = document.getElementById('mobile-title').innerText;
    const time = timefun();
    div.classList.add('bg-slate-100', 'my-4', 'mx-4', 'rounded-xl', 'p-4');
    div.innerHTML = `
     <h3>You have Complete The Task ${titleText} at ${time} </h3> 
     `;
    container.appendChild(div);
})

document.getElementById('btn-cloud').addEventListener('click', function () {
    numberChange();
    btnDisable('btn-cloud');
    alert('Board updated successfully');
    let container = document.getElementById('update-container');
    let div = document.createElement('div');
    const titleText = document.getElementById('cloud-title').innerText;
    const time = timefun();
    div.classList.add('bg-slate-100', 'my-4', 'mx-4', 'rounded-xl', 'p-4');
    div.innerHTML = `
     <h3>You have Complete the task ${titleText} at ${time} </h3> 
     `;
    container.appendChild(div);
})

document.getElementById('btn-swift').addEventListener('click', function () {
    numberChange();
    btnDisable('btn-swift');
    alert('Board updated successfully');
    let container = document.getElementById('update-container');
    let div = document.createElement('div');
    const titleText = document.getElementById('swift-title').innerText;
    const time = timefun();
    div.classList.add('bg-slate-100', 'my-4', 'mx-4', 'rounded-xl', 'p-4');
    div.innerHTML = `
     <h3>You have Complete the task ${titleText} at ${time} </h3> 
     `;
    container.appendChild(div);
})

document.getElementById('btn-meta').addEventListener('click', function () {
    numberChange();
    btnDisable('btn-meta');
    alert('Board updated successfully');
    let container = document.getElementById('update-container');
    let div = document.createElement('div');
    const titleText = document.getElementById('meta-title').innerText;
    const time = timefun();
    div.classList.add('bg-slate-100', 'my-4', 'mx-4', 'rounded-xl', 'p-4');
    div.innerHTML = `
     <h3>You have Complete the task ${titleText} at ${time} </h3> 
     `;
    container.appendChild(div);
})

document.getElementById('btn-google').addEventListener('click', function () {
    numberChange();
    btnDisable('btn-google');
    alert('Board updated successfully');
    let container = document.getElementById('update-container');
    let div = document.createElement('div');
    const titleText = document.getElementById('google-title').innerText;
    const time = timefun();
    div.classList.add('bg-slate-100', 'my-4', 'mx-4', 'rounded-xl', 'p-4');
    div.innerHTML = `
     <h3>You have Complete the task ${titleText} at ${time} </h3> 
     `;
    container.appendChild(div);
})

document.getElementById('btn-glass').addEventListener('click', function () {
    numberChange();
    btnDisable('btn-glass');
    alert('Board updated successfully');
    congratulations();
    let container = document.getElementById('update-container');
    let div = document.createElement('div');
    const titleText = document.getElementById('glass-title').innerText;
    const time = timefun();
    div.classList.add('bg-slate-100', 'my-4', 'mx-4', 'rounded-xl', 'p-4');
    div.innerHTML = `
     <h3>You have Complete the task ${titleText} at ${time} </h3> 
     `;
    container.appendChild(div);

})

document.getElementById('btn-clear').addEventListener('click',function(){
  let container = document.getElementById('update-container');
  container.innerHTML = '';
})
var count=0;
document.getElementById('btn-theme').addEventListener('click',function(){
    count = count + 1;
   if (count == 1){
    document.body.style.backgroundColor = "#eddc9d";
   }
   else if ( count == 2){
    document.body.style.backgroundColor = "#eaed9d";
   }
   else if ( count == 3){
    document.body.style.backgroundColor = "#beed9d";
   }
   else if ( count == 4){
    document.body.style.backgroundColor = "#9deda9";
   }
   else if ( count == 5){
    document.body.style.backgroundColor = "#9dedd6";
   }
   else if ( count == 6){
    document.body.style.backgroundColor = "#9dd0ed";
   }
   else if ( count == 7){
    document.body.style.backgroundColor = "#9dbced";
   }
   else if ( count == 8){
    document.body.style.backgroundColor = "#9da0ed ";
   }
   else if ( count == 9){
    document.body.style.backgroundColor = "#b19ded ";
   }
   else if ( count == 10){
    document.body.style.backgroundColor = "#c59ded ";
   }
   else if ( count == 11){
    document.body.style.backgroundColor = "#e59ded ";
   }
   else if ( count == 12){
    document.body.style.backgroundColor = "#e0a8a8 ";
   }
   else if ( count == 13){
    document.body.style.backgroundColor = "#dec781 ";
   }
   else if ( count == 14){
    document.body.style.backgroundColor = "#f0f0b9 ";
   }
   else if ( count == 15){
    document.body.style.backgroundColor = "#e3caca ";
   }
   else {
    document.body.style.backgroundColor = "white";
   }

})

