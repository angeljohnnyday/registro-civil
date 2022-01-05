import { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { InputFormat } from 'components'
import { globe_img, visa_img, mastercard_img, american_express_img } from 'assets/img'

const Payment = () => {
    const [data, setData] = useState({
        name: '',
        card: '',
        mmdd: '',
        cvc: ''
    });

    const handleChange = ({ target }) => setData({ ...data, [target.name]: target.value })
    const handleCard = ({ value }) => setData({ ...data, card: value });
    const handleMMDD = ({ formattedValue }) => setData({ ...data, mmdd: formattedValue })
    const handleCVC = ({ value }) => setData({ ...data, cvc: value });
    const handlePay = () => console.info(data)

    return (
        <Container className='py-5'>
            <Row className='p-4'>
                <Col md={{ span: 8, offset: 2 }} className='bg-white'>
                    <Card>
                        <Card.Body>
                            <div className='text-center'>
                                <img src={globe_img} width={60} alt='globe_img' />
                            </div>
                            <Form>
                                <Row className='mt-4'>
                                    <Col md={{ span: 10, offset: 1 }}>
                                        <Form.Group className='mb-4'>
                                            <Form.Label>
                                                Nombre completo:
                                            </Form.Label>
                                            <Form.Control
                                                value={data.name}
                                                size='sm'
                                                name='name'
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={{ span: 10, offset: 1 }}>
                                        <Form.Group className='mb-4'>
                                            <Form.Label>
                                                Número de tarjeta:
                                            </Form.Label>
                                            <InputFormat
                                                value={data.card}
                                                className='form-control form-control-sm'
                                                format='#### #### #### ####'
                                                onValueChange={handleCard}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={{ span: 5, offset: 1 }}>
                                        <Form.Group className='mb-4'>
                                            <Form.Label>
                                                MM / YY:
                                            </Form.Label>
                                            <InputFormat
                                                value={data.mmdd}
                                                className='form-control form-control-sm'
                                                format='##/##'
                                                onValueChange={handleMMDD}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={{ span: 5 }}>
                                        <Form.Group className='mb-4'>
                                            <Form.Label>
                                                CVC:
                                            </Form.Label>
                                            <InputFormat
                                                value={data.cvc}
                                                className='form-control form-control-sm'
                                                format='###'
                                                onValueChange={handleCVC}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={{ span: 10, offset: 1 }} className='my-4'>
                                        <div className='d-flex flex-row justify-content-end'>
                                            <img 
                                                src={visa_img} 
                                                height={30}
                                                alt='visa_img'
                                            />
                                            <img 
                                                src={mastercard_img} 
                                                height={30}
                                                alt='mastercard_img'
                                            />
                                            <img 
                                                src={american_express_img} 
                                                height={30}
                                                alt='american_express_img'
                                            />
                                        </div>
                                    </Col>
                                    <Col md={{ span: 10, offset: 1 }} className='my-4'>
                                        <div className='d-grid gap-2'>
                                            <Button
                                                size='sm'
                                                onClick={handlePay}
                                            >
                                                Pagar
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Payment
