import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between">
            <Link href="/" className="text-lg font-bold">
            Sentra Web
            </Link>
            <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/products" className="hover:underline">Products</Link>
            </div>
        </div>
        </nav>
    );
}