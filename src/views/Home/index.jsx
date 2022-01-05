import { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import PanelCertificados from './PanelCertificados'
import Cart from './Cart'
import FormalitiesInfo from './FormalitiesInfo'
import HowToMake from './HowToMake'
import { TemplateRow } from 'components'
import Ending from './Ending'
import { AppContext } from 'context/AppProvider'

const Home = () => {
    const { lastStep } = useContext(AppContext);

    return (
        <>
            <Container
                className='pt-4 pb-5 px-5'
                style={{ minWidth: '100%' }}
            >
                <Row>
                    <Col>
                        <h1 style={{ fontSize: '28px', fontWeight: 600 }}>REGISTRO CIVIL</h1>
                        <span style={{ fontSize: '18px', fontWeight: 300 }}>IDENTIFICACIÓN</span>
                    </Col>
                </Row>
            </Container>
            <TemplateRow>
                <Col md={{ span: 10, offset: 1 }}>
                    <Card>
                        <Card.Body>
                            <Row className='px-3 my-4'>
                                {!lastStep ? (
                                    <>
                                        <Col sm={12} md={6}>
                                            <PanelCertificados />
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <Cart />
                                        </Col>
                                    </>
                                ) : (
                                    <Ending />
                                )}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <FormalitiesInfo />
            </TemplateRow>
            <Container>
                <HowToMake />
            </Container>
        </>
    )
}

export default Home
