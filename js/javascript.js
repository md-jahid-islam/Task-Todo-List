let todoinput = document.querySelector('.todoinput')
let todobutton = document.querySelector('.todobutton')
let todolist = document.querySelector('.todolist')

todobutton.addEventListener('click' , ()=>{
    if(todoinput.value == ''){
        alert('torupore thada poruk')
    }else{
    //  todoinput.value = ''


        //=====================crating tag
 let singletodo = document.createElement('div')
 let singletodoinput = document.createElement('input')
 let editbutton = document.createElement('button')
  let deletebutton = document.createElement('button')

 //================ append child   
 todolist.appendChild(singletodo)
 singletodo.appendChild(singletodoinput)
 singletodo.appendChild(editbutton)
 singletodo.appendChild(deletebutton)

 //====================== add child lost
  singletodo.classList.add('singletodo')
 singletodoinput.classList.add('singletodoinput')
 editbutton.classList.add('editbutton')
 deletebutton.classList.add('deletebutton')


   //============== add content
     editbutton.innerHTML = 'edit'
     deletebutton.innerHTML = 'delete'
     singletodoinput.value = todoinput.value
    //  todoinput.value = ''





     //================== set atribute
     singletodoinput.setAttribute('readonly' , 'readonly')

     //================ delete todo
     deletebutton.addEventListener('click' , ()=>{
        singletodo.remove()
     })
     //=========== erdit todo
     editbutton.addEventListener('click' , ()=>{
        if(editbutton.innerHTML == 'edit'){
            editbutton.innerHTML = 'save'
            editbutton.style = 'background: green'
            singletodoinput.removeAttribute('readonly' , 'readonly')
        }else{
            editbutton.innerHTML = 'edit'   
            editbutton.style = 'background: yellow'  
           singletodoinput.setAttribute('readonly' , 'readonly')
        }
     })
    }
})
