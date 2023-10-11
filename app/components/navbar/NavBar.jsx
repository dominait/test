import Link from "next/link" 
 function NavBar ( {children}){
    return (
       <nav className="bg-rose-500 text-rose-50 py-3">
        <ul className="flex justify-center gap-x-8">
            <li><Link href="/">home</Link></li>
            <li><Link href="/courses">courses</Link></li>
            <li><Link href="/course/82dcd341">featured course</Link></li>
        </ul>
       </nav>
    )
 }



 export {NavBar}