import style from "./style.css"
import image from "../../images/bootstrap.PNG"

const Bootstrap = () => {
    return(
        <div className="main_content">
        <h2 className="title">Bootstrap</h2>
        <div>
            <p>
            Bootstrap adalah framework HTML, CSS, dan JavaScript yang berfungsi untuk mendesain website responsive dengan cepat dan mudah. Bootstrap membuat website lebih interaktif — Bootstrap juga menggunakan plugin custom JQuery. Jadi, bisa menambahkan berbagai elemen interaktif ke website dengan mudah. Misalnya, popup, transisi, image carousel, dan sebagainya.
            </p>
            <img src={image} alt="gambar uiux" className="image"/>
        </div>
    </div>
    )
}
export default Bootstrap;