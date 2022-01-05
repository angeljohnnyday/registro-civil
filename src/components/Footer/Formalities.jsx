import { Col, Row } from 'react-bootstrap'
import { ArrowRightIcon } from 'assets/icons'
import { formalities } from './data'

const Formalities = () => {
    return (
        <>
            <div className='div-space-footer'></div>
            <Row>
                <Col md={4}>
                    <div className='d-flex flex-column'>
                        <ul
                            className='list-unstyled'
                        >
                            {formalities.filter((_, i) => i <= 4).map((i, k) => (
                                <li className='mb-2 pointer' key={k} style={{ fontSize: '13px' }}>
                                    <ArrowRightIcon /> {i}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='d-flex flex-column'>
                        <ul
                            className='list-unstyled'
                        >
                            {formalities.filter((_, i) => i >= 5 && i <= 9).map((i, k) => (
                                <li className='mb-2 pointer' key={k} style={{ fontSize: '13px' }}>
                                    <ArrowRightIcon /> {i}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='d-flex flex-column'>
                        <ul
                            className='list-unstyled'
                        >
                            {formalities.filter((_, i) => i >= 10 && i <= 14).map((i, k) => (
                                <li className='mb-2 pointer' key={k} style={{ fontSize: '13px' }}>
                                    <ArrowRightIcon /> {i}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Formalities
