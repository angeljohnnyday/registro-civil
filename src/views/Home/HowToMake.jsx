import { Col, Row } from 'react-bootstrap'
import { makings } from './data'

const HowToMake = () => {
    return (
        <Row className='p-4 my-5 text-center'>
            <Col md={12}>
                <h3>Cómo realizar todos sus trámites</h3>
            </Col>
            {makings.map((m, k) => (
                <Col md={4} className='my-5 grow' key={k}>
                    <h5 className='pointer' style={{ fontWeight: 200 }}>
                        <m.icon width={40} height={40} /> { m.titulo }
                    </h5>
                </Col>
            ))}
        </Row>
    )
}

export default HowToMake
