import Layout from "@/hoc/Layout";
import Category from "@/pages/category/Category";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/error/NotFound";
import JobType from "@/pages/jobType/JobType";
import Location from "@/pages/location/Location";
import Skill from "@/pages/skill/Skill";
import Technologies from "@/pages/technologies/Technologies";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/jobtype" element={<JobType />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/location" element={<Location />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
