import { Col, Container, Row } from 'react-bootstrap'
import { formalities } from './data'

const Formalities = () => {
    return (
        <Container
            className='pt-4 pb-5 px-5'
            style={{ minWidth: '100%' }}
        >
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <h4 className='title-block'>Trámites</h4>
                    <Row>
                        {formalities.map((f, k) => (
                            <Col md={4} className='my-4 grow' key={k}>
                                <h5 className='pointer' style={{ fontWeight: 200 }}>
                                    {f}
                                </h5>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Formalities
