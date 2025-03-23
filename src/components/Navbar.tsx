import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full py-6 px-32 bg-white/90">
      <ul className="flex space-x-4 w-300 place-content-between align-middle m-auto">
        <li>
            <Link href="/" className="text-indigo-500 text-xl">
                iElectricalDevices
            </Link>
        </li>
        <li>
            <Link href="/" className="text-base/7">Cadastrar Endereço</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
