// document.getElementById('btn').addEventListener('click',function(){
//     console.log('success');
// })


// //console.log(new Date());

// document.getElementById('special-date').innerText = Date() ;

// document.getElementById('new-page').addEventListener('click',function(){
//    window.location.href = "questions.html"
// });

// document.getElementById('btn-back-to-desk').addEventListener('click',function(){
//      window.location.href = "./index.html"
// })
function timefun (){
    // const d = new Date();
    // let hour = d.getHours();
    // let minute = d.getMinutes();
    // let seconds = d.getSeconds();
    // console.log(hour+':'+minute+':'+seconds);
    var time = new Date();
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
}

function numberChange (){
    const num = document.getElementById('total-task').innerText;
    const number = parseInt(num);
   

    const assignedTask = document.getElementById('assigned-task').innerText ;
    const assignedTaskNumber = parseInt(assignedTask);

    
 
    if (assignedTaskNumber > 0){
        const newassignedTasknumber = assignedTaskNumber - 1;
        document.getElementById('assigned-task').innerText = newassignedTasknumber;
        const newNumber = number + 1;
        document.getElementById('total-task').innerText = newNumber;
        //document.getElementById('').setAttribute('disabled', true);
       
    }
    
    
}
 
function btnDisable(IDName){
    document.getElementById(IDName).setAttribute('disabled',true);
    
}

function congratulations(){
    const zero = document.getElementById('assigned-task').innerText;
    const zeroNum  = parseInt(zero);
    if (zeroNum === 0){
        alert('Congratulations!!! You have completed all the current tasks')
    }
}


