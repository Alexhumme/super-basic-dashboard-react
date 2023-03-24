import Button from "../../../../components/common/Button"

export default function Fichas() {
    return (
        <>
            <div className="module-title">
                Fichas
            </div>
            <div>
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
                <div>
                    <Button disabled />
                    <Button disabled cType="danger" />
                    <Button disabled cType="mistery" />
                    <Button disabled cType="info" />
                    <Button disabled cType="success" />
                    <Button disabled cType="warning" />
                    <Button disabled cType="light" />
                    <Button disabled cType="secondary" />
                    <Button disabled cType="dark" />
                </div>
                <div>
                    <Button disabled outline />
                    <Button disabled outline cType="danger" />
                    <Button disabled outline cType="mistery" />
                    <Button disabled outline cType="info" />
                    <Button disabled outline cType="success" />
                    <Button disabled outline cType="warning" />
                    <Button disabled outline cType="light" />
                    <Button disabled outline cType="secondary" />
                    <Button disabled outline cType="dark" />
                </div>
            </div>

        </>
    )
}