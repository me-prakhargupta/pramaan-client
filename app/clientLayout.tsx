"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import DashboardPage from "./dashboard/page";
export default function ClientLayout({
    children,
} : {
    children: React.ReactNode;
}) {

    const pathname = usePathname();

    const authRoutes = ["/signin", "/signup"];
    const hideLayout = authRoutes.includes(pathname);

    return(
        <>
            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
};