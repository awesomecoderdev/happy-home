import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Happy Home | Where joy and warmth embrace you at every turn.",
	description:
		"Welcome to the Happy Home, where joy and warmth embrace you at every turn. Nestled in a serene neighborhood, this delightful abode radiates an aura of contentment that is instantly palpable upon entering. From the charming exterior to the thoughtfully designed interior, every aspect of this home exudes happiness.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
