import stylesCover from "./Cover.module.css"

function Cover({ title, studentName, subject, group }) {
    return (
        <div className={stylesCover.coverContainer}>
            <div className={stylesCover.coverContent}>
                <div className={stylesCover.schoolLogo}>
                    <div className={stylesCover.logoCircle}>UPA</div>
                </div>
                <h1 className={stylesCover.mainTitle}>{title}</h1>
                <div className={stylesCover.divider}></div>
                <div className={stylesCover.infoSection}>
                    <p className={stylesCover.label}>Materia:</p>
                    <p className={stylesCover.value}>{subject}</p>
                </div>
                <div className={stylesCover.infoSection}>
                    <p className={stylesCover.label}>Grupo:</p>
                    <p className={stylesCover.value}>{group}</p>
                </div>
                <div className={stylesCover.infoSection}>
                    <p className={stylesCover.label}>Alumno:</p>
                    <p className={stylesCover.value}>{studentName}</p>
                </div>
                <div className={stylesCover.dateSection}>
                    <p className={stylesCover.date}>Febrero 2026</p>
                </div>
            </div>
        </div>
    )
}

export default Cover
