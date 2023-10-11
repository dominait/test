import { getAllCourses } from "@/app/lib/controllers/getAllCourses"


async function GET (req, {params}) {
  const courses = await getAllCourses()
  const pathname = req.nextUrl.pathname
  const method = req.method
 
  return Response.json(courses)
}

export {GET}