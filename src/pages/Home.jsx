import Layout from "../components/Layout/Layout";
import Cover from "../components/Cover/Cover";
import Presentation from "../components/Presentation/Presentation";

function Home(){
    return(
        <Layout>
            <Cover 
                title = "Universidad Politécnica de Atlacomulco"
                studentName = "Izhcel Arzate Miranda"
                subject = "Programación Web"
                group = "ISC"
            />
            <Presentation 
                course = "Programación Web"
                studentName = "Izhcel Arzate Miranda"
                group = "ISC-800"
                schoolPeriod = "Enero - Mayo 2026"
                schoolName = "Universidad Politécnica de Atlacomulco"
            />
        </Layout>
    )
}

export default Home
