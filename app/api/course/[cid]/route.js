import courses from '@/app/data/courses.json' assert {type: 'json'}
async function GET (req, {params}) {
  const cid = params.cid
   const course = courses.find(course=> course.cid ===  cid)
  return Response.json( course )
}

export {GET}