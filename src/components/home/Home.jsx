import React from 'react'
import './Home.css';
function Home() {
  return (
    <>
      <div
        class="hero min-h-screen bg-[url(https://images5.alphacoders.com/939/thumb-1920-939055.jpg)]"
        
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
          
    </>
  )
}

export default Home