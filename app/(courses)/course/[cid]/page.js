import Link from "next/link";
import { notFound } from "next/navigation";

export async function  generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/course` );
  const courses = await res.json()

  return courses.map((course) => ( 
       {cid:course.cid}
  ));
 
  
} 

async function getCourse ( cid ){
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/course/${cid}` );
  const courses = await res.json()

  return courses
   
}

async function CourseCard({ cid, details, ...rest }) {
 const { type, title, shortDescription, img } = details;
 
  return (
    <aside className="   ">
    <img className=" " src={img} alt={title} />

    <div className="py-8 px-8 bg-slate-50">
      <header>
        <h2 className="text-xl font-semibold">{title}</h2>
      </header>

      <p className="text-slate-500">{shortDescription}</p>
      <Link className="text-blue-600 font-semibold" href={`/course/${cid}`}>full course outline</Link>
      <footer className="py-5">
        <ul className="text-xs flex gap-x-3">
          <li className={`rounded ${styleTypes(type)} py-0.5 px-2`}> {type} </li>
          <li>{cid}</li>
          <li>instructor</li>
          <li>views</li>
          <li>ratings</li>
          <li>comments</li>
        </ul>
      </footer>
    </div>
  </aside>
  );
}

function styleTypes(type){
 
        

    const vids = new Map()
    vids.set('javascript', 'bg-yellow-300 text-yellow-700')
    vids.set('graphql', 'bg-pink-300 text-pink-700')
    vids.set('python', 'bg-violet-300 text-violet-700')
    vids.set('react', 'bg-blue-300 text-blue-700')
   
       
    return vids.get(type)
  
 

}
 async function CoursePage ({params:{cid}} )  {

  
  const course = await getCourse(cid)

  if(!course){
    notFound()
  }
 
 
  return (
    <>
   
      
       
        <header>
          <h1>Single Course</h1>
          <p>course: {cid}</p>
        </header>

        <main>
        
          <CourseCard {...course}/> 
        
        </main>
     
    
       
      </>
    );
 
}

 
export default CoursePage

 

 

 
 
 