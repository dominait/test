 
// app/products/[categorySlug]/[productId]/page.js
// Generate segments for both [categorySlug] and [productId]
 

 async function UserPage ({params})  {
   
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
     console.log(user)
    if(!user){
      notFound()
    } 

    return (
      <>
        
      
        <header className="text-center pt-28">
          <h2 className="text-5xl text-slate-900">Single Item Pages</h2>
       
        </header>
        <main className=" min-h-screen py-24">
           <section className="bg-slate-50 py-10 px-6 w-fit rounded-md border shadow-sm mx-auto">
            <header>
              <h2>{user.name}</h2>
            </header>
            <ul>
              <li>{user.email}</li>
              <li>{user.phone}</li>
              <li>{user.website}</li>
              <li>{user.company.name}</li>
            </ul>
           </section>
        </main>
    
       
      </>
    );
 
}
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json()

  return users.map((user) => ({
    id: users.id
  }));
} 
 
export default UserPage