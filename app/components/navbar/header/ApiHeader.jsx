/* 
 Use with Message Component to display 
 function calls

*/ 
 
 function ApiHeader ({method, pathname} ){
    return (
      <header className="pt-28 mx-auto w-fit">
      <p className='text-gray-500 text-sm font-medium'><span className='mr-3 text-green-50 text-xs bg-green-400 rounded-md py-1 px-3'>{method}</span>{pathname}</p>
      <h2 className="text-5xl text-slate-900 font-medium">All Courses Page</h2>
    </header>
    )
 }



 export {ApiHeader}