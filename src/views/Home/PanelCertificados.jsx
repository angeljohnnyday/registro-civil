import { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { ArrowDownIcon, ArrowRightIcon, CheckIcon } from 'assets/icons'
import { certificados } from './data'
import { InputFormat } from 'components'

const PanelCertificados = ({ setShopping }) => {
    const [open, setOpen] = useState([]);
    const [selects, setSelects] = useState([]);

    const isOpen = (/** @type {number} */ n) => open.find(o => o === n) !== undefined;
    const isSelect = (/** @type {string} */ d) => selects.find(s => s.nombre === d) !== undefined;

    const handleOpen = (/** @type {number} */ n) => () => {
        if (isOpen(n)) {
            setOpen(open.filter(o => o !== n))
        } else {
            setOpen([...open, n]);
        }
    }

    const handleSelect = (/** @type {object} */ d) => () => {
        if (isSelect(d.nombre)) {
            setSelects(selects.filter(s => s.nombre !== d.nombre))
        } else {
            setSelects([...selects, d]);
        }
    }

    const handleNUIP = ({ formattedValue }, d) => {
        if (isSelect(d.nombre)) {
            setSelects(
                selects.map(s => s.nombre !== d.nombre ? s : { ...d, nuip: formattedValue })
            )
        }
    }

    const handleAddShop = (/** @type {object} */ d) => () => {
         setShopping( (/** @type {array} */ shopping) =>  ([ ...shopping,  selects.find(s => s.nombre === d.nombre) ]) )
    }

    return (
        <ul
            className='list-unstyled mb-0 py-3 pt-md-1'
        >
            {certificados.map((c, k) => (
                <li
                    className='mb-2 py-1 pointer'
                    key={k}
                >
                    <div onClick={handleOpen(k)}>
                        {!isOpen(k) && (
                            <ArrowRightIcon />
                        )}
                        {isOpen(k) && (
                            <ArrowDownIcon />
                        )}
                        {c.nombre}
                    </div>
                    {isOpen(k) && (
                        <ul>
                            <li>
                                <Table hover size='sm' className='mt-2'>
                                    <tbody>
                                        {c.data.map((d, k) => (
                                            <tr key={k}>
                                                <td style={{ fontSize: '13px' }}>
                                                    <Form.Check
                                                        type='checkbox'
                                                        label={
                                                            <span className='pointer'>{ d.nombre }</span>
                                                        }
                                                        checked={isSelect(d.nombre)}
                                                        onChange={handleSelect(d)}
                                                    />
                                                    {isSelect(d.nombre) && (
                                                        <div className='p-3'>
                                                            <label className='pb-2'>NUIP:</label>
                                                            <br />
                                                            <InputFormat 
                                                                format='##.###.###-#'
                                                                onValueChange={ data => handleNUIP(data, d) }
                                                                style={{ height: '36px' }}
                                                            />
                                                            <Button 
                                                                variant='dark'
                                                                size='sm'
                                                                className='mx-2 mb-1'
                                                                onClick={handleAddShop(d)}
                                                            >
                                                                Agregar al carrito
                                                                <CheckIcon 
                                                                    width={22}
                                                                    height={22}
                                                                />
                                                            </Button>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </li>
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default PanelCertificados
