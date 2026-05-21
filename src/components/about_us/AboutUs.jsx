import React from 'react'

function AboutUs() {
  return (
    <>
        
         <div
        className="hero h-[calc(75vh-64px)]  bg-[url(https://www.mashed.com/img/gallery/kfc-chicken-copycat-recipe/directions-1565810304.jpg)]">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our History</h1>
            <p className="mb-5">
                We didn’t build our fried chicken empire overnight.
            </p>
          </div>
        </div>
      </div>
        <div className='my-10 container mx-auto px-3'>

        <h1 className="mb-5 text-5xl font-bold">The 3legant Story</h1>
        
        <div className='col items-start my-10'>

            <h2  className="mb-5 text-4xl font-semibold">Humble Beginnings</h2>
            <p className='text-2xl font-Inter'>The Colonel — aka Harland Sanders — was born Sept. 9, 1890, on a farm near Henryville, Indiana, and learned to cook at an early age. After serving in the U.S. Army and trying his hand at more than couple careers — firefighter, streetcar operator and insurance salesperson, to name a few. He then began running service stations in Nicholasville and Corbin, Kentucky. There, he started serving his delicious fried chicken to interstate travelers, eventually perfecting the pressure cooker method and his secret recipe of 11 herbs and spices.</p>

            <div className="row gap-2 w-full my-10">
                <img className='w-1/2' src='https://cdn.sanity.io/images/kbqq3e0r/production/3571ee13f4df9ff5c50bbb8a00cc174a40f20a4b-938x694.jpg?w=3840&q=100' />
                <img className='w-1/2' src='https://cdn.sanity.io/images/kbqq3e0r/production/288825725f543825748b1ac937d31420e2337017-938x694.jpg?w=3840&q=100' />
            </div>
            
            <h2  className="mb-5 text-4xl font-semibold">Time Line</h2>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
            >
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                />
            </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1930</time>
            <div className="text-lg font-black">The Big 40</div>
            When Harland turns 40, he buys a roadside motel in Corbin, Kentucky and begins serving his southern style chicken.
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
            >
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                />
            </svg>
            </div>
            <div className="timeline-end md:mb-10">
            <time className="font-mono italic">1939</time>
            <div className="text-lg font-black">Top Secret</div>
            Finally, the Colonel perfects his unique blend of 11 herbs and spices that are still used today... and still top secret
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
            >
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
                />
            </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1950</time>
            <div className="text-lg font-black">Iconic</div>
            The Colonel dons his iconic white suit for the first time and from then on, wears one every time he's out in public.
            </div>
            <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end md:mb-10">
                <time className="font-mono italic">1952</time>
                <div className="text-lg font-black">First franchise</div>
                The first Kentucky Fried Chicken franchise opens near Salt Lake City, Utah.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">1956</time>
                <div className="text-lg font-black">On the road</div>
                Colonel Sanders sells his Corbin, Kentucky restaurant and goes on the road to sign up new KFC fanchisees.
                </div>
            </li>

            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end md:mb-10">
                <time className="font-mono italic">1957</time>
                <div className="text-lg font-black">The original bucket</div>
                Say “bucket of chicken” and you think KFC®. The original KFC® bucket from 1957 has now come to be recognized worldwide.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">1964</time>
                <div className="text-lg font-black">Time to step back</div>
                As a network of franchises grows across the USA, the Colonel feels it's time to slow down, and sells the KFC Company to investors
                </div>
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-end md:mb-10">
                <time className="font-mono italic">1976</time>
                <div className="text-lg font-black">Celebrity status</div>
                The Colonel is named the 2nd most recognizable celebrity in the world after an independent survey.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">1980</time>
                <div className="text-lg font-black">A legend passes</div>
                After a rich and full life, Harland Sanders sadly passes away at the age of 90. His legacy lives on through his Original Recipe chicken and the c
                </div>
            </li>
         </ul>
        </div>

        </div>
    </>
  )
}

export default AboutUs