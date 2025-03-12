import { Navbar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    <main className="p-3">
        {children}
    </main>
    </>
  );
}