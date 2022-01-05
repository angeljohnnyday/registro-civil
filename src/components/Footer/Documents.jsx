import { Col, Row } from 'react-bootstrap'

const Documents = () => {
    return (
        <Row>
            <Col>
                <div className='d-flex flex-column'>
                    <span className='counter'>26,939</span>
                    <h5 style={{ fontWeight: 200 }}>Documentos gestionados</h5>
                </div>
            </Col>
            <Col>
                <div className='d-flex flex-column'>
                    <span className='counter'>264,455,356</span>
                    <h5 style={{ fontWeight: 200 }}>Visitas desde el 9 de julio de 2010.</h5>
                </div>
            </Col>
        </Row>
    )
}

export default Documents
