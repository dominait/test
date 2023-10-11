import courses from '@/app/api/course/test.json' assert {type: 'json'}
async function GET (req, {params}) {
  const cid = params.cid 
 
  const course = courses.find(course=> course.id == cid)
  console.log(course)
  return Response.json( course)
}

export {GET}