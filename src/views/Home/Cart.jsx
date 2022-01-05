import { useMemo } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { ShopKartIcon } from 'assets/icons'
import { formatter } from 'assets/js/generic'

const Cart = ({ shopping = [], setLastStep, setCustomer }) => {

    const total = useMemo(() => {

        if (shopping.length !== 0) {
            return shopping.reduce((a, { costo }) => a + costo, 0);
        }

        return 0
    }, [shopping])

    const handleChange = ({ target }) => {
        setCustomer( (customer) => ({ ...customer, [target.name]: target.value  }) )
    }

    return (
        <Card
            bg='light'
            text='dark'
        >
            <Card.Body className='bb-0'>
                <h4 className='px-3 text-center'>
                    <ShopKartIcon width={20} height={20} /> Carro de Certificados
                </h4>
                <div className='d-flex flex-column bd-highlight mb-3'>
                    <div className='px-3 text-center'>
                        Total: {formatter.money(total)}
                        <div className='mt-2'>
                            Detalle
                        </div>
                        {shopping.length === 0 && (
                            <div className='mt-2'>
                                Su carro está vacío.
                            </div>
                        )}
                    </div>
                    {shopping.length !== 0 && (
                        <div className='px-3'>
                            <div className='my-3 text-center'>Ud seleccionó  los siguientes certificados </div>
                            {shopping.map((s, k) => (
                                <div
                                    key={k}
                                    className='py-2'
                                    style={{
                                        fontSize: '13px',
                                        borderTop: '1px solid #1c1f23',
                                    }}
                                >
                                    {s.nombre}
                                    <br />
                                    {s.nuip} - {formatter.money(s.costo)}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {shopping.length !== 0 && (
                    <>
                        <Card className='px-4 py-3 mt-3 mb-4'>
                            <div className='text-center mb-3'>
                                Datos del solicitante
                            </div>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Run Solicitante</Form.Label>
                                    <Form.Control
                                        placeholder='Ej: 12345678k'
                                        size='sm'
                                        name='run'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>N° Documento Solicitante</Form.Label>
                                    <Form.Control
                                        placeholder='Ej: 111222333 o A1234567890'
                                        size='sm'
                                        name='document'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control
                                        placeholder='Ej. usuario@mail.com'
                                        size='sm'
                                        name='email'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Reingrese su correo electrónico</Form.Label>
                                    <Form.Control
                                        placeholder='Ej. usuario@mail.com'
                                        size='sm'
                                        name='confirmEmail'
                                    />
                                </Form.Group>
                            </Form>
                        </Card>
                        <div className='d-grid gap-2'>
                            <Button
                                variant='dark'
                                size='sm'
                                onClick={() => setLastStep(true)}
                            >
                                Continuar
                            </Button>
                        </div>
                    </>
                )}
            </Card.Body>
        </Card >
    )
}

export default Cart
