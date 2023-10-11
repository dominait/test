import { promises as fs } from 'fs';
async function GET (req, {params}) {
  const cid = params.cid 
  let courses= await fs.readFile(process.cwd() + '/app/data/courses.json', 'utf8');
   courses = JSON.parse(courses)
    const course = courses.find(course => course.cid == cid)
    
  return Response.json(course)
}

export {GET}