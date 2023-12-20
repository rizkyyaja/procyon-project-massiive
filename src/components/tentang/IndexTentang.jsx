import { PerjalananWeb } from "./PerjalananWeb"
import { CeritaKami } from "./CeritaKami"
import { VisiMisi } from "./VisiMisi"
import { TimKami } from "./TimKami"
import { AppDownload } from "./AppDownload"


import { Footer } from "../Footer"

export const IndexTentang = () => {
  return (
    <>
      
      <PerjalananWeb />
      <CeritaKami />
      <VisiMisi />
      <TimKami />
      <AppDownload />
     
      
      <Footer />
    </>
  )
}