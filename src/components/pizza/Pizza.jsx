import axios from 'axios'
import React, { useEffect , useState } from 'react'
import Card from '../card/Card';
import Loader from '../loader/Loader';
function Pizza() {
  

  const [posts,setPosts] = useState([]);
  const [error,setError] = useState('');
  const [isLoader,setIsLoader] = useState(true);
  const getPosts = async ()=>{
    try{
      
    const response = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=pizza`);
    setPosts(response.data.data.recipes) ;
    }
    catch(err){
      setError('error to load recipes');
    }finally{
      setIsLoader(false);
    }
  } 
  
  useEffect(
    ()=>{
      getPosts();
    }, []
  )

  if(isLoader){
    return <Loader />
  }
  
  if(error){
    return <div role="alert" className="alert alert-error my-150 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
  }
  return (
    <div className='container mx-auto px-2 my-10'>
      <h1 className='capitalize text-3xl font-Poppins'>pizza</h1>
      
      <div className=''>
        {
          posts.map((post)=>
            <Card post={post} />
            )
        }
      </div>
    </div>
  )
}

export default Pizza