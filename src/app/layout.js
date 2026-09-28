import Header from "@/components/Header";
import "./globals.css";

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
                </main>
            </body>
        </html>
    );
};

export default RootLayout;