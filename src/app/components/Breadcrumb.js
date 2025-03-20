"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
    const pathname = usePathname(); // Ambil path saat ini
    const pathSegments = pathname.split("/").filter(segment => segment);

    return (
        <nav className="text-sm text-gray-600 my-4">
            <ul className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const formattedSegment = segment.replace(/-/g, " ").toUpperCase();

                    return (
                        <li key={index} className="flex items-center">
                            <span className="mx-2"> &gt; </span>
                            {index === pathSegments.length - 1 ? (
                                <span className="text-gray-800">{formattedSegment}</span>
                            ) : (
                                <Link href={href} className="text-blue-600 hover:underline">
                                    {formattedSegment}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;