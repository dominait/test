import { promises as fs } from 'fs';
async function GET (req, {params}) {
 
  let courses= await fs.readFile(process.cwd() + '/app/data/courses.json', 'utf8');
 
  courses = JSON.parse(courses)
    
  return Response.json(courses)
}

export {GET}