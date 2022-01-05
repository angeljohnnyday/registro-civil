import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { ArrowRightIcon, CheckIcon, QuestionIcon, TVIcon } from 'assets/icons'
import { statusRequests, consultings, verifications } from './data'

const FormalitiesInfo = () => {
    return (
        <Row className='mt-5 text-center'>
            <Col md={4}>
                <OverlayTrigger
                    placement='bottom'
                    trigger='click'
                    overlay={
                        <Tooltip>
                            <ul
                                className='list-unstyled'
                            >
                                {statusRequests.map((i, k) => (
                                    <li className='mb-2 pointer' key={k} style={{ fontSize: '13px' }}>
                                        <ArrowRightIcon /> {i}
                                    </li>
                                ))}
                            </ul>
                        </Tooltip>
                    }
                >
                    <h5 className='pointer' style={{ fontWeight: 200 }}>
                        <QuestionIcon width={40} height={40} /> Revisa estado de solicitud
                    </h5>
                </OverlayTrigger>
            </Col>
            <Col md={4}>
                <OverlayTrigger
                    placement='bottom'
                    trigger='click'
                    overlay={
                        <Tooltip>
                            <ul
                                className='list-unstyled'
                            >
                                {consultings.map((i, k) => (
                                    <li className='mb-2 pointer' key={k} style={{ fontSize: '13px' }}>
                                        <ArrowRightIcon /> {i}
                                    </li>
                                ))}
                            </ul>
                        </Tooltip>
                    }
                >
                    <h5 className='pointer' style={{ fontWeight: 200 }}>
                        <TVIcon width={40} height={40} /> Consultas registros en línea
                    </h5>
                </OverlayTrigger>
            </Col>
            <Col md={4}>
                <OverlayTrigger
                    placement='bottom'
                    trigger='click'
                    overlay={
                        <Tooltip>
                            <ul
                                className='list-unstyled'
                            >
                                {verifications.map((i, k) => (
                                    <li className='mb-2 pointer' key={k} style={{ fontSize: '13px' }}>
                                        <ArrowRightIcon /> {i}
                                    </li>
                                ))}
                            </ul>
                        </Tooltip>
                    }
                >
                    <h5 className='pointer' style={{ fontWeight: 200 }}>
                        <CheckIcon width={40} height={40} /> Verificación de certificados
                    </h5>
                </OverlayTrigger>
            </Col>
        </Row>
    )
}

export default FormalitiesInfo
