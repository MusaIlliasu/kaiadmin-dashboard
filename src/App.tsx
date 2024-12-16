import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Main from "./pages/dashboard/main/Main";
import Metering from "./pages/dashboard/metering/Metering";
import Taxing from "./pages/dashboard/taxing/Taxing";
import Billing from "./pages/dashboard/billing/Billing";
// import FlatList from "./pages/flatList/FlatList";
import DataFetching from "./pages/dataFetching/DataFetching";
// import UsersComponent from "./pages/users/UsersComponent";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Users */}
          {/* <Route path="/users" element={<UsersComponent />} /> */}
          <Route path="/users" element={<DataFetching />} />
          {/* <Route path="/users" element={<FlatList />} /> */}

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