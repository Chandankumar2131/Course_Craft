import React from 'react'
import { FcLike ,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

export default function Card(props) {
  let course = props.course;
  let likedCourses= props.likedCourses;
  let setLikedCourses= props.setLikedCourses
  
  
  const clickHandler=()=>{
if(likedCourses.includes(course.id)){
  //pehele se like huaa pda tha
  setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
  toast.warning("like removed")
}
else{
//pehele se like nahi hai ye course
if(likedCourses.length===0){
  setLikedCourses([course.id]);
}
else{
  //non-empty pehele se 
  setLikedCourses((prev)=>[...prev,course.id])
}
toast.success("Liked Successfuly")
}
  }
  
  return (
    <div className="w-full bg- max-w-sm bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-2  border border-white/10 p-4 flex flex-col gap-3 text-white bg-black">
  <div>
    <img src={course.image.url} className="w-full h-52 object-cover rounded-lg" />
  </div>

  <div className="flex justify-end">
    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
    onClick={clickHandler}
    >
      {
        likedCourses.includes(course.id)?
        (<FcLike size={30} />):( <FcLikePlaceholder size={30}/>)
      }
    </button>
  </div>

  <div className='p-4'>
    <p className="text-white font-semibold text-lg leading-6 ">{course.title}</p>
    <p className="mt-2 text-white">
      {
        course.description.length>100 ?
        (course.description.substr(0,100))+"...":
        (course.description)
      }
      
      </p>
  </div>
</div>

  )
}
 