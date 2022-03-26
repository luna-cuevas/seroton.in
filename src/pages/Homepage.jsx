import React from 'react'
import dog from '../components/img/dog.png'
import puppy from '../components/img/puppy.jpg'
import dog2 from '../components/img/dog2.jpg'

const Homepage = () => {
  return (
      <>
       <div className='flex flex-col justify-center items-center w-1/2 text-center'>
        <h1 className='text-4xl'>Serotonin</h1>
        <p className='text-1xl w-3/5'>Bad days happen. Don't let it get you down. Take a break with us :)</p>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-[#6C2BD9] hover:bg-[#9061F9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Categories <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <a href="" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dogs</a>
              </li>
              <li>
                <a href="" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cats</a>
              </li>
              <li>
                <a href="" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Jokes</a>
              </li>
              <li>
                <a href="" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Inspiration</a>
              </li>
            </ul>
        </div>
      </div>  
      <div className='w-1/4 mt-5 mr-5 items-center relative'>
        <img className='hero-img rounded-3xl' src={dog} alt="" />
        <img style={{clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"}} className='absolute top-44 -right-24' src={puppy} alt="" />
        <img style={{clipPath: "circle(46.1% at 50% 50%)"}} className="absolute top-52 right-8" src={dog2} alt="" />
      </div> 
      </>
  )
}

export default Homepage;