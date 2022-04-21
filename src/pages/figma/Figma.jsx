import style from "./style.css"
import image from "../../images/figma.PNG"


const Figma = () => {
    return(
        <div className="main_content">
            <h2 className="title">Figma</h2>
            <div>
                <p>
                Figma merupakan editor grafik vector dan alat prototyping yang menggunakan basis web. Figma memiliki fitur offline yang dapat digunakan untuk aplikasi desktop baik nanti digunakan di MacOS atau Windows.
                </p>
                <img src={image} alt="gambar figma" className="image"/>
            </div>
        </div>
    )
}
export default Figma;