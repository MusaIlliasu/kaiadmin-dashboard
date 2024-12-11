import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Main from "./pages/dashboard/main/Main";
import Metering from "./pages/dashboard/metering/Metering";
import Taxing from "./pages/dashboard/taxing/Taxing";
import Billing from "./pages/dashboard/billing/Billing";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Main />} />
            <Route path="metering" element={<Metering />} />
            <Route path="taxing" element={<Taxing />} />
            <Route path="billing" element={<Billing />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;