import "./globals.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
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
                <main className="pt-20">
                    {children}
                    <Header />

                    <ToastContainer position="top-center" autoClose={1000} />
                </main>
            </body>
        </html>
    );
};

export default RootLayout;