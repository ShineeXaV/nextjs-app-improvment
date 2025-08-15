import Link from "next/link";

export default function MainLayout({ 
  children,
}: { 
    children: React.ReactNode 
}) {
  return (
    <>
      <div
        className= "flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Next.js Page</h1>
            <ul className="flaxe space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4">
         {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()}mypersonal </p>
        </footer>
        <div className="header">header</div>
        <div>{children}</div>
        <div id="footer_baru">footer</div>
      </div>
    </>

  );
}