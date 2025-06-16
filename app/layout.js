import './globals.css';
import ClientProviders from './ClientProviders';

export const metadata = {
    title: 'Ujjain Mahakal',
    description: 'Spiritual Tour Website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}
