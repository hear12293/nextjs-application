"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    return (<div>
        <ul>
            {navLinks.map((link, id) => {
                const isActive=pathname.startsWith(link.href)
                return(
                <li key={id}>
                    <Link href={link.href} className={isActive ? "font-bold mr-4":"text-blue-500"}>{link.name}</Link>
                </li>
            )
            })}
</ul>
        {children}
    </div>)

    
}