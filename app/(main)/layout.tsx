import { Header, Footer } from "../_entries/components";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="bg-background text-foreground font-sans p-8">
        {children}
      </div>
      <Footer />
    </>
  );
}
