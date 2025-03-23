import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-screen px-3 py-3 sm:py-6 sm:px-8 md:px-32 bg-white/90 z-1"> 
      <ul className="flex max-w-280 place-content-between align-middle m-auto">
        <li>
            <Link href="/" className="text-indigo-500 text-sm sm:text-xl">
                iElectricalDevices
            </Link>
        </li>
        <li>
            <Link href="/address" className="text-xs sm:text-base/8">Cadastrar Endereço</Link>
        </li>
      </ul>
    </nav>
  );
}
