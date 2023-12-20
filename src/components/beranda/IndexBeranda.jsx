import { FiturUtama } from "./FiturUtama"
import Hero from "./Hero"
import { TampilanFitur } from "./TampilanFitur"
import { TentangKami } from "./TentangKami"
import { AppDownload } from "./AppDownload"
import { Footer } from "../Footer"

export const IndexBeranda = () => {
  return (
    <>
      <Hero />
      <FiturUtama />
      <TampilanFitur />
      <TentangKami />
      <AppDownload />
      <Footer />
    </>
  )
}