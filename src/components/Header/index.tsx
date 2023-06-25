import logo from '../../assets/lestore.png'

export default function Header() {
  return (
    <header className='flex justify-center items-center border-b border-b-gray-300 p-4'>
      <img src={logo} alt='Logo' width={250} />
    </header>
  )
}
