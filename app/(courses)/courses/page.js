 import Link from 'next/link'
 async function getCourses (  ){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json()

    return users
     
  }
 
 
 
 

  function Course ( {id, name, email, phone, website} ){
     console.log(id, name) 
     return (
       
              <section className="bg-slate-50 py-16 px-6 w-[260px] rounded-md border shadow-sm ">
            <header>
              <h2>{name}</h2>
               <Link href={`/course/${id}`}>full details</Link>
            </header>
            <ul>
              <li>{email}</li>
              <li>{phone}</li>
              <li>{website}</li>
          
            </ul>
           </section>
        
     )
  }
 
 
 
  export {Course}

 async function CoursesPage ( ) {

    const users = await getCourses()
  return (
    <>
      
    
      <header className="text-center pt-28">
        <h2 className="text-5xl text-slate-900">CoursesPage Page Component </h2>
      </header>
      <main className=" min-h-screen py-24 flex flex-wrap w-1/2 justify-center mx-auto gap-3 bg-red-200">
        {users.map(user => <Course key={user.id}    {...user} />)}
      </main>
  
      
    </>
  );
}

export default CoursesPage