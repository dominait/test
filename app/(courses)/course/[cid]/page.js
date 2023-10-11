import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "fs/promises";

export async function  generateStaticParams() {
  const filePath = process.cwd()+'/app/data/courses.json'
  const fileContents = await readFile(filePath, 'utf-8')
  const courses = JSON.parse(fileContents)

  return courses.map((course) => ( 
       {cid:course.cid}
  ));
 
  
} 

// async function getCourse ( cid ){
//   const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/course/${cid}` );
//   const courses = await res.json()

//   return courses
   
// }



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


async function getCourses(id){
  const filePath = process.cwd()+'/app/data/courses.json'
  const fileContents = await readFile(filePath, 'utf-8')
  const courses = JSON.parse(fileContents)

  const course = courses.find(item=> item.cid === id)
  return course

  
  

  // const course = courses.find(course=> course.cid === id)

}



 async function CoursePage ({params} )  {
  const id = params.cid
  
  const {cid, details} =  await getCourses(id)
  const {title, type, shortDescription, img} = details

 
 
 
  return (
    <>
   
      <ul className="max-w-sm">
      <li>{id}</li>
      <li>{title}</li>
      <li>{type}</li>
      <li>{shortDescription}</li>
       <li><img src={img} alt="" /></li>
      </ul>
        {/* <header>
          <h1>Single Course</h1>
          <p>course: {cid}</p>
        </header>

        <main>
        
          <CourseCard {...course}/> 
        
        </main> */}
     
    
       
      </>
    );
 
}

 
export default CoursePage

 

 

 
 
 