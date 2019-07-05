function getMessages(url){
   fetch(url)  
   .then(rsp=>rsp.json())
   .then(result=> {
      for(let i = Message.counter; i<result.length; i++){
         /* class counter for messages.  only instantiates( and renders) if there 
         are more messages in the fetch response than the counter.*/
         new Message(result[i].content)
      }
   })
}

document.addEventListener('DOMContentLoaded', (e)=>{

   setInterval(()=>{
   let list = document.querySelector('#messages')
   getMessages('http://10.185.1.218:3000/messages')
}, 500)
let submitButton = document.querySelector('#submit-btn')

getMessages('http://10.185.1.218:3000/messages')

submitButton.addEventListener('click', e =>{
   e.preventDefault()
   let inputField = document.querySelector('#message_input')
   if (inputField.value != ""){
      new Message(inputField.value)
      
      fetch('http://10.185.1.218:3000/messages', {
         method: 'POST', 
         headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
      body: JSON.stringify( {
         content: inputField.value
      })
      })
      inputField.value = ''
   }
   
})





})

