import FormItem from "../../../../components/common/FormItem"

export default function Ambientes() {
    return (
        <>
            <div className="module-title">
                Ambientes
            </div>
            <div>
                <FormItem />
                <FormItem label="Contraseña" type="password" />
                <FormItem label="Fecha" type="date" />
                <FormItem label="Hora" type="time" />
                <FormItem label="Numero" type="number" />
                <FormItem label="Radio" type="radio" opts={[
                    'opcion 1',
                    'opcion 2',
                    'opcion 3',
                ]} />
                <FormItem label="Selector" type="selector" opts={[
                    'opcion 1',
                    'opcion 2',
                    'opcion 3',
                ]} />
                <FormItem label="Area de texto" type="textArea" />
            </div>
        </>
    )
}