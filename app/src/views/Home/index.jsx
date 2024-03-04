import logo from "../../assets/Sena_Colombia_logo.svg"
import HomeForm from "./HomeForm"

export default function Home() {
    return (
        <>
            <section className="login-top">
                <div className="login-form">
                    <HomeForm />
                </div>
            </section>
            <div className="login-background">
                <div className="login-background-card"></div>
                <div className="login-background-card"></div>
                <div className="login-background-card"></div>
                <div className="login-background-card"></div>
                <div className="login-background-card"></div>
            </div>
        </>
    )
}