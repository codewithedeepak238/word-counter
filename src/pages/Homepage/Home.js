import { useInfo } from "../../context/InfoContext"
import { MainInfo } from "./components/MainInfo"
import { PersonalInfo } from "./components/PersonalInfo"
import { EducationInfo } from "./components/EducationInfo"
import { LinkInfo } from "./components/LinkInfo"

export const Home = () => {
    const {myCart} = useInfo()
  return (
    <main className="flex flex-col gap-8">
        <MainInfo/>
        <PersonalInfo/>
        <EducationInfo/>
        <LinkInfo/>
    </main>
  )
}

