import Layout from "../components/Layout/Layout";
import Cover from "../components/Cover/Cover";
import Presentation from "../components/Presentation/Presentation";

function Home() {
  return (
    <Layout>
      <Cover
        title="Universidad Politécnica de Atlacomulco"
        studentName="Izhcel Arzate Miranda"
        subject="Programación Web"
        group="ISC"
      />
      <Presentation
        curso="Programación Web"
        area="Ingeniería en Sistemas Computacionales"
        alumno="Izhcel Arzate Miranda"
        matricula="2331107051"
        grupo="ISC"
        periodoEscolar="Enero - Mayo 2026"
        institucion="Universidad Politécnica de Atlacomulco"
      />
    </Layout>
  );
}

export default Home;