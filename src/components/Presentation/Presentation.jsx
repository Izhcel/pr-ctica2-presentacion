import stylesPresentation from "./Presentation.module.css"

function Presentation({ 
    course,  
    studentName, 
    group, 
    schoolPeriod,
    schoolName 
}) {
    return (
        <div className={stylesPresentation.presentationContainer}>
            <div className={stylesPresentation.presentationContent}>
                <div className={stylesPresentation.header}>
                    <h2 className={stylesPresentation.title}>Hoja de Presentación</h2>
                </div>
                
                <div className={stylesPresentation.body}>
                    <div className={stylesPresentation.infoBlock}>
                        <div className={stylesPresentation.row}>
                            <span className={stylesPresentation.label}>Materia:</span>
                            <span className={stylesPresentation.value}>{course}</span>
                        </div>
                        
                     
                        
                        <div className={stylesPresentation.row}>
                            <span className={stylesPresentation.label}>Alumno:</span>
                            <span className={stylesPresentation.value}>{studentName}</span>
                        </div>
                        
                        <div className={stylesPresentation.row}>
                            <span className={stylesPresentation.label}>Grupo:</span>
                            <span className={stylesPresentation.value}>{group}</span>
                        </div>
                        
                        <div className={stylesPresentation.row}>
                            <span className={stylesPresentation.label}>Periodo Escolar:</span>
                            <span className={stylesPresentation.value}>{schoolPeriod}</span>
                        </div>
                        
                        <div className={stylesPresentation.row}>
                            <span className={stylesPresentation.label}>Institución:</span>
                            <span className={stylesPresentation.value}>{schoolName}</span>
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
    )
}

export default Presentation
