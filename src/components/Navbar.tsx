import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full py-8 px-32">
      <ul className="flex space-x-4 w-300 place-content-between align-middle m-auto">
        <li>
            <Link href="/" className="text-indigo-500 text-xl">
                iElectricalDevices
            </Link>
        </li>
        <li>
            <Link href="/"className='text-lg'>Cadastrar Endereço</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
