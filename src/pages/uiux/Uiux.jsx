import style from "./style.css"
import image from "../../images/uiux.PNG"

const Ui_ux = () => {
    return(
        <div className="main_content">
        <h2 className="title">Introduction UI/UX</h2>
        <div>
            <p>
            User Interface merupakan visual yang digunakan user Ketika berinteraksi dengan produk kita. User interface ini memiliki 4 pilar, 4 pilar ini didasari tentang bagaimana penampilan dan pemahaman dari desain kita yang saling bekerja sama. Sedangkan User Experience merupakan apapun yang dirasakan pengguna ketika menggunakan produk kita. UX ini terdiri dari 6 bagian yaitu Business, Business Logic, Technology, Interaction Logic, Design, dan Computer Communication.
            </p>
            <img src={image} alt="gambar uiux" className="image"/>
        </div>
    </div>
    )
}
export default Ui_ux;