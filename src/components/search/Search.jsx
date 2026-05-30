import React from 'react'
import { use } from 'react'
import { useState , useEffect } from 'react'
import Card from '../card/Card';
import Loader from '../loader/Loader';
import axios from 'axios'
function Search() {

  const [search,setSearch] = useState("");
  const [posts,setPosts] = useState([]);
  const [isLoader,setIsLoader] = useState(true);
  const getPosts = async ()=>{
    try{
      
    const response = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=${search}`);
    setPosts(response.data.data.recipes) ;
    console.log(response);
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
  

  return (
    <div className='container mx-auto  my-10'>
        <input type="text" placeholder="Search Here" className="input" onChange={e => setSearch(e.target.value)}/>
        <button className='btn btn-neutral' onClick={getPosts}>Search</button>
        
      <div>
        {
          posts.map((post)=>
            <Card post={post} />
            )
        }
      </div>
    
    </div>
  )
}

export default Search