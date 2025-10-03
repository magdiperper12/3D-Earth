import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
});

export const metadata = {
	title: 'Digital Mov',
	description: 'Landing Page',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				suppressHydrationWarning
				className={`${poppins.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
