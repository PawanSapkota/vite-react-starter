import Layout from "@/hoc/Layout"
import Dashboard from "@/pages/dashboard/Dashboard"
import NotFound from "@/pages/error/NotFound"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App