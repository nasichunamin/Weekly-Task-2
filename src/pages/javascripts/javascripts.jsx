import style from "./style.css"
import image from "../../images/js.PNG"

const JavaScript = () => {
    return(
        <div className="main_content">
        <h2 className="title">JavaScript Refreshment</h2>
        <div>
            <p>
            Javascript adalah Bahasa Pemrogaman yang tingkat tinggi (high-level), scripting, untyped dan interpreted.
            javascript itu dibuat untuk halaman web, apapun itu web browsernya. javascript merupakan bahasa yang untype atau tidak berpengaruh terhadap tipe data, dan yang terakhir interpreted, selama kita mempunyai web browser javascript bisa dijalankan karena memiliki bahasa yang fleksibel dan mudah untuk diuji.
            </p>
            <img src={image} alt="gambar uiux" className="image"/>
        </div>
    </div>
    )
}
export default JavaScript;