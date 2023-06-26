import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
export default function Search() {
  const [searchTxt, setSearchTxt] = useState('')

  return (
    <>
      <form>
        <input
          type='search'
          placeholder='Search'
          required
          className='w-[300px] h-[40px] rounded-md border-2 border-gray-300 p-4'
          value={searchTxt}
          onChange={event => {
            setSearchTxt(event.target.value)
            console.log(searchTxt)
          }}
        />
        <button
          type='submit'
          className='w-[100px] h-[40px] bg-red-500 text-white rounded-md'
        >
          <BsSearch className='w-[20px] h-[20px]' />
        </button>
      </form>
      <hr />
    </>
  )
}
