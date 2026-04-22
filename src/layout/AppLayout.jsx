import { Outlet } from "react-router-dom";
import TopBar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function AppLayout() {
  return (
    <>
      <header>
        <TopBar />
        <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
          <Navbar />
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
