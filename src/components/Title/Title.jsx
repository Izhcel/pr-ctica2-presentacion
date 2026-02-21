import stylesTitle from "./Title.module.css"

function Title({title}){
    return(
        <div>
            <h1 className={stylesTitle.title}>
                {title}
            </h1>
        </div>
    )
}

export default Title