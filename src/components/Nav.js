import {Link} from 'react-router-dom'

const Nav = () => {
  const categories = [
    "Home",
    "Dogs",
    "Cats",
    "Jokes",
    "Inspiration"
  ]
  return (
    <nav className='w-auto'>
      <div className='flex m-auto justify-center'>
          {categories.map((category, key) => {
            return (
              <Link className='text-lg list-none m-5' key={key} to={`/${category}`} >{category}</Link>
            )
          })}
      </div>
      
    </nav>
  )
}

export default Nav