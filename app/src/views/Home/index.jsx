import logo from "../../assets/Sena_Colombia_logo.svg"
import FormSelector from "./FormSelector"

export default function Home() {
    return (
        <>
            <section className="top">
                <div className="horario-consulta-container">

                </div>
                <div className="ingresar">
                    <FormSelector />
                </div>
            </section>
            <section className="bottom">
                <article>
                <h3>CENTRO INDUSTRIAL Y DE ENERGIAS ALTERNATIVAS SENA</h3>
                La Entidad más querida por los colombianos funciona desde su creación en permanente alianza entre el
                Gobierno, los empresarios y los trabajadores, con el firme propósito de aumentar la capacidad de progreso
                en Colombia a través del incremento de la productividad en las empresas y regiones, sin dejar de lado la
                inclusión social, alineados con la política nacional: Más empleo y menos pobreza. Por tal razón, se generan
                continuamente programas y proyectos de responsabilidad social, empresarial, formación, innovación,
                internacionalización y transferencia de conocimientos y tecnologías.
                </article>
                <img src={logo} alt="" />
            </section>
        </>
    )
}