import FormItem from "../../../../components/common/FormItem"
import DataTable from "../../../../components/common/DataTable"
import ModuleHead from "../../../../components/common/ModuleHead"

export default function Ambientes() {
    return (
        <>
            <ModuleHead title={"Ambientes"} />
            <div>
                <div>
                    <FormItem hatLabel />
                    <FormItem label="Contraseña" type="password" hatLabel />
                    <FormItem label="Fecha" type="date" hatLabel />
                    <FormItem label="Hora" type="time" hatLabel />
                    <FormItem label="Numero" type="number" hatLabel />
                    <FormItem label="Radio" type="radio" opts={[
                        'opcion 1',
                        'opcion 2',
                        'opcion 3',
                    ]} hatLabel />
                    <FormItem label="Selector" type="selector" opts={[
                        'opcion 1',
                        'opcion 2',
                        'opcion 3',
                    ]} hatLabel />
                    <FormItem label="Area de texto" type="textArea" />
                </div>
            </div>
            <div>
                <DataTable title="Ambientes" />
            </div>
        </>
    )
}