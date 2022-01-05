import NumberFormat from 'react-number-format'

const InputFormat = ({ ...rest }) => {
    return (
        <NumberFormat
            { ...rest }
            // customInput={ Input } 
        />
    )
}

export default InputFormat
