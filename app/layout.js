import './globals.css';
import ClientProviders from './ClientProviders';

export const metadata = {
    title: 'Ujjain Mahakal',
    description: 'Spiritual Tour Website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}