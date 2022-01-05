import { Col, Container, Row } from 'react-bootstrap'
import Documents from './Documents'
import FormalitiesSummary from './FormalitiesSummary'
import Formalities from './Formalities'
import Info from './Info'
import Instituto from './Instituto'

const Footer = () => {
    return (
        <>
            <Container
                className='pt-4 pb-5 px-5'
                style={{ backgroundColor: '#f4f4f4', minWidth: '100%' }}
            >
                <Row>
                    <Col md={{ span: 7, offset: 1 }}>
                        <Info />
                    </Col>
                    <Col md={4}>
                        <Documents />
                    </Col>
                </Row>
                <hr className='my-4' />
                <Row>
                    <Col md={3}>
                        <Instituto />
                    </Col>
                    <Col md={3}>
                        <FormalitiesSummary />
                    </Col>
                    <Col md={6}>
                        <Formalities />
                    </Col>
                </Row>
            </Container>
            <div className='d-flex px-5 py-3' style={{ backgroundColor: '#DDD' }}>
                Última actualización 9:05 am diciembre 18 de 2021 - Todos los derechos reservados. Aviso De Privacidad
            </div>
        </>
    )
}

export default Footer
