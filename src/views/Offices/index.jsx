import { Button, Card, Col, Container, Form, ListGroup, Row, Table } from 'react-bootstrap'
import { formatter } from 'assets/js/generic'
import { direcciones, oficinas } from './data'
import { TemplateRow } from 'components'

const Offices = () => {
    return (
        <>
            <TemplateRow rowClassName='px-5'>
                <Col sm={12} md={{ span: 10, offset: 1 }}>
                    <h4 className='title-block'>Nuestras oficinas</h4>
                </Col>
                <Col
                    sm={12}
                    md={{ span: 10, offset: 1 }}
                    className='p-4 mb-3'
                >
                    <Form>
                        <Row className='align-items-center'>
                            <Col className='pt-2'>
                                <h4>Busca tu oficina</h4>
                            </Col>
                            <Col>
                                <Form.Select
                                    size='sm'
                                >
                                    <option>Seleccione region</option>
                                    <option value='1'>One</option>
                                    <option value='2'>Two</option>
                                    <option value='3'>Three</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select
                                    size='sm'
                                >
                                    <option>Seleccione oficina</option>
                                </Form.Select>
                            </Col>
                            <Col xs='auto'>
                                <Button type='submit' size='sm'>
                                    Buscar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col sm={12} md={{ span: 10, offset: 1 }} >
                    <Card>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                {oficinas.map((o, k) => (
                                    <ListGroup.Item
                                        key={k}
                                    >
                                        <Row>
                                            <Col>
                                                <h4>{o.nombre}</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div className='d-flex flex-column'>
                                                    <div className='px-2 py-3'>{o.direccion}</div>
                                                    <div className='px-2 py-3'>{o.horario}</div>
                                                </div>
                                            </Col>
                                            <Col>

                                                <div className='d-flex flex-column'>
                                                    <div className='px-2 py-3'>{o.oficial}</div>
                                                </div>

                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </TemplateRow>
            <Container className='mt-4 py-3 px-0'>
                <Row>
                    <Col sm={12} md={{ span: 10, offset: 1 }}>
                        <h4 className='title-block'>Nómina de teléfonos Direcciones Regionales SRCEI</h4>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                </tr>
                            </thead>
                            <tbody>
                                {direcciones.map((d, k) => (
                                    <tr key={k} className='pointer'>
                                        <td>{d.nombre}</td>
                                        <td>{formatter.tel(d.telefono)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Offices
