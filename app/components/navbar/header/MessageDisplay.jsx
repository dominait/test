async function Message ({message}) {
 
      if(message){
           return (
            <div>
              <h3>Data File Path</h3>
              <p className='text-xs'>{message}</p>
            </div>
           )
      }
  
      return null
   }

   export {Message}