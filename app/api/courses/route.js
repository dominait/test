import courses from '@/app/data/courses.json' assert {type: 'json'}


async function GET (req, {params}) {
 
  // const pathname = req.nextUrl.pathname
  // const method = req.method
  
 
  return Response.json(courses)
}

export {GET}