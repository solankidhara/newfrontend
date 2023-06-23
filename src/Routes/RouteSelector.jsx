import "../utils/intercepter";

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Index";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Page3D from "../Pages/3D";
import Policies from "../Pages/Policies";
import Search from "../Pages/Search";
import Pricing from "../Pages/Pricing";
import Frame from "../Pages/Frame";
import Admin from "../Admin/Layout";
import Dashboard from "../Admin/Page/Dashboard";
import CatagoryTable from "../Admin/Page/CategoryTable";
import ListOfContent from "../Admin/Page/ListOfContent";
import ImageComponent from "../Pages/ImagePage";
import { PrivateRoute } from "./PrivateRoute";
import TypeOfContent from "../Admin/Page/TypeOfContent";
import Tags from "../Admin/Page/Tags";
import UserTable from "../Admin/Page/UserTable";
import ProtectedModel from "../Admin/Page/ProtectedModel/index ";
import FileType from "../Admin/Page/FileType";
import License from "../Admin/Page/License";
import Sizes from "../Admin/Page/Size";
import { useState } from "react";
import BulkUpload from "../Admin/Page/BulkUpload";
import VideoPage from "../Pages/Video";
import { PrivateRouteForAdmin } from "./PrivateRouteForAdmin";

function RouteSelector() {
  const [isLogged, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const IfLogin = () => {
    if (isLogged && localStorage.getItem("token") === null) {
      setIsLoggedIn(false);
    }
    return <Navigate to={"/"} />;
  };

  return (
    <Routes>
      <Route path="/signin" element={!isLogged ? <SignIn /> : <IfLogin />} />
      <Route path="/signup" element={!isLogged ? <SignUp /> : <IfLogin />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/image" element={<ImageComponent />} />
        <Route path="/3d" element={<Page3D />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:dd/search/:tag" element={<Search />} />
        <Route path="/:dd/search/" element={<Search />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/frame/:id" element={<Frame />} />
      </Route>
      <Route element={<PrivateRouteForAdmin />}>
        <Route element={<Admin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/bulk-upload" element={<BulkUpload />} />
          <Route path="/admin/user" element={<ProtectedModel />} />
          <Route path="/admin/test1" element={<ProtectedModel />} />
          <Route path="/admin/test2" element={<ProtectedModel />} />
          <Route path="/admin/invoices" element={<ProtectedModel />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/admin/tax-details" element={<ProtectedModel />} />
          <Route path="/admin/invoice-anal" element={<ProtectedModel />} />
          <Route path="/admin/pricing" element={<ProtectedModel />} />
          <Route path="/admin/documentation" element={<ProtectedModel />} />
          <Route path="/admin/categorytable" element={<CatagoryTable />} />
          <Route path="/admin/listofcontent" element={<ListOfContent />} />
          <Route path="/admin/typeofcontent" element={<TypeOfContent />} />
          <Route path="/admin/tags" element={<Tags />} />
          <Route path="/admin/file-type" element={<FileType />} />
          <Route path="/admin/license-type" element={<License />} />
          <Route path="/admin/size" element={<Sizes />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RouteSelector;
