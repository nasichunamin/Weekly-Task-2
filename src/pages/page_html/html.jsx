import style from "./style.css"
import image from "../../images/html.png"

const Html = () => {
    return(
        <div className="main_content">
        <h2 className="title">HTML</h2>
        <div>
            <p>
            HTML atau Hypertext Markup Language adalah bahasa markup yang digunakan untuk membuat struktur halaman website agar dapat ditampilkan pada web browser. Jadi, HTML dapat dianalogikan sebagai pondasi awal dalam menyusun kerangka halaman web secara terstruktur sebelum membahas terkait tampilan desain dan sisi fungsionalitas.
            </p>
            <img src={image} alt="gambar uiux" className="image"/>
        </div>
    </div>
    )
}
export default Html;