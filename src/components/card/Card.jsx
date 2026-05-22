import React from 'react'

function Card({post}) {
  return (<>
     <div className="row gap-10 shadow-2xl my-10 rounded-full max-sm:col max-sm:rounded-b-md">
        <img className='w-100 h-100 rounded-full max-md:w-70 max-md:h-70' src={post.image_url}
         />
        <div classNamr="">
        <h2 className="text-xl font-Poppins max-md:text-lg"><span className='text-3xl font-bold max-md:text-xl'>Publisher : </span> {post.publisher}</h2>
        <p className='text-xl font-Poppins mt-5 max-md:text-lg'><span className='text-3xl font-bold max-md:text-xl'>Title : </span> {post.title}</p>
        </div>
    </div>
    </>)
}

export default Card