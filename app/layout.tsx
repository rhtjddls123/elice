import type { Metadata } from 'next';
import { CourseContextProvider } from './_hooks/course-context';
import './_styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className=' p-6 flex justify-center bg-[#f0f1f3]'>
        <CourseContextProvider>
          <div className=' w-full max-w-[1280px]'>{children}</div>
        </CourseContextProvider>
      </body>
    </html>
  );
}
