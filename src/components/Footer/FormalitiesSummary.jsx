import { ArrowRightIcon } from 'assets/icons'
import { formalitiesSummary } from './data'

const FormalitiesSummary = () => {
    return (
        <div className='d-flex flex-column'>
            <h5
                style={{ fontSize: '22px', fontWeight: 200 }}
            >
                Información de Trámites
            </h5>
            <ul
                className='list-unstyled mb-0 py-3 pt-md-1'
            >
                {formalitiesSummary.map((i, k) => (
                    <li className='mb-2 pointer' key={k} style={{ fontSize: '13px' }}>
                        <ArrowRightIcon />  {i}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FormalitiesSummary
