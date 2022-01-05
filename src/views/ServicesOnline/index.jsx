import { TemplateRow } from 'components'
import { Col } from 'react-bootstrap'

const ServicesOnline = () => {
    return (
        <TemplateRow>
            <Col md={{ span: 10, offset: 1 }}>
                <h4 className='title-block'>Servicios en linea</h4>
            </Col>
        </TemplateRow>
    )
}

export default ServicesOnline
