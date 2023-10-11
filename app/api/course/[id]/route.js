import { getAllCourses } from "@/app/lib/controllers/getAllCourses"

async function GET (req, {params}) {
  const id = params.id
   const courses = await getAllCourses()
   const course = courses.find(course=> course.cid === params.id)
 
  return Response.json( course)
}

export {GET}