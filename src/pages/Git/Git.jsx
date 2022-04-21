import style from "../Git/style.css"
import gambar_git from "../../images/git.png"

const Git = () => {
    return(
        <div className="main_content">
            <h2 className="title">Git</h2>
            <div>
                <p>
                Git adalah sebuah salah satu VCS populer yang digunakan developer untuk mengembangkan software secara bersama - sama. 
                Git akan mengetrack semua perubahan kapanpun dia berubah dan siapa yang merubah. Di git ada commit yang digunakan sebagai riwayat perubahan.
                Git yang sudah public salah satunya github. gitbuh merupakan salah satu soc,l9ikm kiiiiiiiiiiokial medianya para developer. disana ada git server yang menampung repository project kita.
                </p>
                <img src={gambar_git} alt="gambar git" className="image"/>
            </div>
        </div>
    )
}
export default Git;