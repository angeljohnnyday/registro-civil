import { CheckIcon } from 'assets/icons'
import { formatter } from 'assets/js/generic'
import { Button, Col, Row, Table } from 'react-bootstrap'

const Ending = ({ shopping = [], customer, setLastStep }) => {
    return (
        <div>
            <div className='p-3 mb-2 bg-light text-dark'>
                <h4 className='f-200'>Entrega de documentos</h4>
                <hr />
                <Row>
                    <Col>
                        <h4 className='f-200'>Datos del solicitante</h4>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h4 className='f-200'>Correo electrónico: </h4>
                            </Col>
                            <Col>
                                <p className='mt-1'>{customer.email}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4 className='f-200'>Teléfono: </h4>
                            </Col>
                            <Col>
                                <p className='mt-1'>N/A</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Table size='sm' className='mt-3'>
                <thead>
                    <tr>
                        <th>No. Identificatorio</th>
                        <th>Documento</th>
                        <th>Valor</th>
                        <th className='text-center'>Ver / Imprimir</th>
                    </tr>
                </thead>
                <tbody>
                    {shopping.map((s, k) => (
                        <tr key={k}>
                            <td>{s.nuip}</td>
                            <td>{s.nombre}</td>
                            <td>{formatter.money(s.costo)}</td>
                            <td className='text-center'>{<CheckIcon width={20} height={20} />}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <ul className='mt-5'>
                <li>Se ha enviado un correo electrónico con los documentos solicitados</li>
                <li>No olvide revisar su bandeja de correos no deseados</li>
                <li>Los archivos están en PDF, en casos de no visualizarlos, descargue el programa de manera gratuita aquí</li>
            </ul>
            <div
                className='pt-5 div-center'
            >
                <Button
                    size='sm'
                    onClick={() => setLastStep(false)}
                >
                    Finalizar
                </Button>
            </div>
        </div>
    )
}

export default Ending
