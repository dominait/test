import fs from 'fs/promises'

export async function getAllCourses(){
    const filePath = process.cwd() + "/app/data/courses.json";
    const courses = await fs.readFile(filePath, 'utf-8')
    return  JSON.parse(courses)
}