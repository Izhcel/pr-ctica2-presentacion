import stylesPresentation from "./Presentation.module.css";

function Presentation({
  curso,
  area,
  alumno,
  matricula,
  grupo,
  periodoEscolar,
  institucion
}) {
  return (
    <div className={stylesPresentation.presentationContainer}>
      <div className={stylesPresentation.presentationContent}>
        <div className={stylesPresentation.header}>
          <h2 className={stylesPresentation.title}>
            Hoja de Presentación
          </h2>
        </div>

        <div className={stylesPresentation.body}>
          <div className={stylesPresentation.infoBlock}>

            <div className={stylesPresentation.row}>
              <span className={stylesPresentation.label}>Materia:</span>
              <span className={stylesPresentation.value}>{curso}</span>
            </div>

            <div className={stylesPresentation.row}>
              <span className={stylesPresentation.label}>Área:</span>
              <span className={stylesPresentation.value}>{area}</span>
            </div>

            <div className={stylesPresentation.row}>
              <span className={stylesPresentation.label}>Alumno:</span>
              <span className={stylesPresentation.value}>{alumno}</span>
            </div>

            <div className={stylesPresentation.row}>
              <span className={stylesPresentation.label}>Matrícula:</span>
              <span className={stylesPresentation.value}>{matricula}</span>
            </div>

            <div className={stylesPresentation.row}>
              <span className={stylesPresentation.label}>Grupo:</span>
              <span className={stylesPresentation.value}>{grupo}</span>
            </div>

            <div className={stylesPresentation.row}>
              <span className={stylesPresentation.label}>Periodo Escolar:</span>
              <span className={stylesPresentation.value}>{periodoEscolar}</span>
            </div>

            <div className={stylesPresentation.row}>
              <span className={stylesPresentation.label}>Institución:</span>
              <span className={stylesPresentation.value}>{institucion}</span>
            </div>

          </div>

          <div className={stylesPresentation.footer}>
            <p className={stylesPresentation.footerText}>
              Práctica de Programación Web - React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;