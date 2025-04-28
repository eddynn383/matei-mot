import type { Metadata } from "next";
import layout from "./layout.module.css"
import "./globals.css";

export const metadata: Metadata = {
    title: "Party Mot Matei",
    description: "Deschide-mă pănă pe 03 Mai 2025",
    openGraph: {
        title: "Party Mot Matei",
        description: "Deschide-mă pănă pe 03 Mai 2025",
        url: "matei-mot.vercel.app",
        siteName: "Party Mot",
        images: [
            {
                url: "/cover.png", // Ensure this image is hosted publicly
                width: 200,
                height: 200,
                alt: "Description of the image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Party Mot Matei",
        description: "Deschide-mă pănă pe 03 Mai 2025",
        images: ["/cover.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={layout.container}>
                {children}
            </body>
        </html>
    );
}
