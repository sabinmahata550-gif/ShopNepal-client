import Header from "@/components/Header";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
    title: {
        default: "Shop-Nepal",
        template: "%s | Shop-Nepal",
    },
    description: "Online ecommerce platform."
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Header />

                <main className="pt-20">
                    {children}
                    <ToastContainer position="top-center" autoClose={2000} />
                </main>
            </body>
        </html>
    );
};

export default RootLayout;