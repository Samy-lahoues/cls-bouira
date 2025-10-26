import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import type { ReactNode } from "react";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
