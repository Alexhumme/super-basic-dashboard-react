import Button from "../../../components/common/Button"

export default function Fichas() {
    return (
        <>
            <div>
                <Button />
                <Button cType="danger" />
                <Button cType="mistery" />
                <Button cType="info" />
                <Button cType="success" />
                <Button cType="warning" />
                <Button cType="light" />
                <Button cType="secondary" />
                <Button cType="dark" />
            </div>
            <div>
                <Button outline />
                <Button outline cType="danger" />
                <Button outline cType="mistery" />
                <Button outline cType="info" />
                <Button outline cType="success" />
                <Button outline cType="warning" />
                <Button outline cType="light" />
                <Button outline cType="secondary" />
                <Button outline cType="dark" />
            </div>
        </>
    )
}