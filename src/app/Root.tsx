import { Outlet } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--mp-bg)" }}>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
