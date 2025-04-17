import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Fathoni R
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="hover:underline">
            Portfolio
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;