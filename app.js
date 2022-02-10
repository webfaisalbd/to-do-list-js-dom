let task=document.getElementById('task');
let addToTask=document.getElementById('addToTask');
let deleteAll=document.getElementById('deleteAll');

addToTask.addEventListener('click',function(){
    const notCompleted=document.querySelector('.notCompleted');
    const completed=document.querySelector('.completed');

    const newList=document.createElement('li');
    const checkButton=document.createElement('button');
    const deleteButton=document.createElement('button');

    checkButton.innerHTML='<i class="fa fa-check"></i>';
    deleteButton.innerHTML='<i class="fa fa-trash"></i>';

    if(task.value==''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your input field is empty',
            
          })
    }
    else{
        newList.textContent=task.value;
        task.value='';
        notCompleted.appendChild(newList);
        newList.appendChild(checkButton);
        newList.appendChild(deleteButton);
    }

    checkButton.addEventListener('click',function(){
        const parent=this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkButton.style.display='none';
    })

    deleteButton.addEventListener('click',function(){
        const parent=this.parentNode;
        parent.remove();
    })

    deleteAll.addEventListener('click',function(){
        Swal.fire({
            icon: 'success',
            title: 'Done...',
            text: 'All list has been deleted',
            
          })
        newList.remove();
    })


})