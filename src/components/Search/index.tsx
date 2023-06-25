export default function Search() {
  return (
    <form>
      <input
        type='search'
        placeholder='Search'
        required
        className='w-[300px] h-[40px] rounded-md border-2 border-gray-300 p-4'
      />
      <button
        type='submit'
        className='w-[100px] h-[40px] bg-red-500 text-white rounded-md'
      >
        Lupa
      </button>
    </form>
  )
}
