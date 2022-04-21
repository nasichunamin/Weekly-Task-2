import style from "./style.css"
import image from "../../images/css.PNG"

const Cascading = () => {
    return(
        <div className="main_content">
        <h2 className="title">CSS</h2>
        <div>
            <p>
            CSS (Cascading Style Sheets) biasanya digunakan untuk mempercantik tampilan web. CSS dapat menghias halaman web, contohnya color, size, font, background, width, height, dll. CSS juga dapat mengatur posisi pada halaman web seperti float, align, display, position, dll.
            </p>
            <img src={image} alt="gambar uiux" className="image"/>
        </div>
    </div>
    )
}
export default Cascading;