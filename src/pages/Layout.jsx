import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export default function Layout() {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}
