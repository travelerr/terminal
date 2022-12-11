import "./App.css";
import { SidebarProvider } from "./contexts/SidebarContext"; // import based on where you put it
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarItemsType } from "./types/sidebar";
import { BarChart } from "react-feather";
import Sidebar from "./components/sidebar/Sidebar";
import NavbarComponent from "./components/navbar/Navbar";
import Home from "./components/Home";
import Indexes from "./components/markets/indexes/index";
import Crypto from "./components/markets/crypto/index";

function App() {
  // SIDEBAR NAV LINKS
  let dashboardSidebarItems = [
    {
      href: "/markets",
      icon: BarChart,
      title: "Markets",
      badge: "1",
      children: [
        {
          href: "/markets/indexes",
          title: "Indexes",
        },
        {
          href: "/markets/crypto",
          title: "Crypto",
        },
        {
          href: "/markets/futures",
          title: "Futures",
        },
      ],
    },
  ] as SidebarItemsType[];

  let items = [
    {
      title: "Dashboard",
      pages: dashboardSidebarItems,
    },
  ];

  return (
    <BrowserRouter>
      <SidebarProvider>
        <div className="wrapper">
          <Sidebar items={items} />
          <div className="main">
            <NavbarComponent />
            <div className="content">
              <Routes>
                <Route path="/markets/indexes" element={<Indexes />} />
                <Route path="/markets/crypto" element={<Crypto />} />
              </Routes>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
