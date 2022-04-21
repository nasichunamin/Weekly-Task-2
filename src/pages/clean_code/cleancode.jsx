import style from "./style.css"
import image from "../../images/js.PNG"

const cleancode = () => {
    return(
        <div className="main_content">
        <h2 className="title">Clean Code</h2>
        <div>
            <p>
            Clean Code merupakan istilah untuk kode yang mudah dibaca, dipahami dan diubah oleh programmer.
            Mengapa clean code?
            </p>
            <ul>
                <li>Work Collaboration : semua orang harus bisa apa yang kita kerjakan</li>
                <li>Feature Development : agar semua orang mengetahui fungsi fungsi atau fitur fitur yang ada dalam code. </li>
                <li>Faster Development : karena adanya clean code semua orang bisa lebih memahami code dengan cepat dan dapat bekerja dengan cepat</li>
            </ul>
            <img src={image} alt="gambar uiux" className="image"/>
        </div>
    </div>
    )
}
export default cleancode;