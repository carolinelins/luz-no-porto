import { useState } from 'react'
import { Form } from 'react-bootstrap'

function FiltroDispositivo() {
    const [devices] = useState([
        {
            label: "Ar-condicionado",
            value: "Ar-condicionado"
        },
        {
            label: "Lâmpadas",
            value: "Lâmpadas"
        },
        {
            label: "Tomadas",
            value: "Tomadas"
        }
    ])

    return (
        <div>
            <Form.Group>
                <Form.Control as="select">
                {devices.map(device => (
                    <option
                        key={device.value}
                        value={device.value}
                    >
                        {device.label}
                    </option>
                ))}
                </Form.Control>
            </Form.Group>
        </div>
    )
}

export default FiltroDispositivo