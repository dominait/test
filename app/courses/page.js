import Link from "next/link";

import { readFile } from "fs/promises";

 async function  getCourses() {
  const filePath = process.cwd()+'/app/data/courses.json'
  const fileContents = await readFile(filePath, 'utf-8')
  const courses = JSON.parse(fileContents)

  return courses 
 
  
} 

async function CourseCard({ cid, details }) {
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
async function Message({ message }) {
 
  if (message) {
    return (
      <div>
        <h3>Data File Path</h3>
        <p className="text-xs">{message}</p>
      </div>
    );
  }

  return null;
}

async function CoursesPage() {
  const courses = await getCourses();
 
 
  if (courses) {
    return (
      <>
        <header className="w-fit">
          <h1 className="text-4xl font-semibold">Courses</h1>
        </header>
        {courses.map((course) => (
          <CourseCard key={course.cid} {...course} />
        ))}
      </>
    );
  }

  return null;
}

export default CoursesPage;
