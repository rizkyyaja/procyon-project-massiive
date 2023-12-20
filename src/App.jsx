import { Outlet, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { IndexFitur } from "./components/fitur/IndexFitur"
import { IndexBeranda } from "./components/beranda/IndexBeranda"
import { IndexTentang } from "./components/tentang/IndexTentang"
import { IndexKontak } from "./components/kontakkami/IndexKontak"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<IndexBeranda />} />
        <Route path="fitur" element={<IndexFitur />} />
        <Route path="tentang" element={<IndexTentang />} />
        <Route path="kontakkami" element={<IndexKontak />} />
      </Route>
    )
  )

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
