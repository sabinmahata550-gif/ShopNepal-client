import { navMenu } from "@/constants/routes";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">
                                N
                            </span>
                        </div>

                        <span className="text-xl font-bold text-gray-900">
                            Nepal<span className="text-blue-600">Shops</span>
                        </span>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navMenu.map((menu) => (
                            <Link
                                key={menu.route}
                                href={menu.route}
                                className="text-gray-600 font-medium hover:text-blue-600 transition"
                            >
                                {menu.label}
                            </Link>
                        ))}
                    </div>

                    {/* Authentication */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/login"
                            className="text-gray-700 font-medium hover:text-blue-600"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Register
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;

