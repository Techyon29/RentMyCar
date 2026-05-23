import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-neutral">
        {children}
      </main>
      <BottomNavbar />
    </>
  );
}
