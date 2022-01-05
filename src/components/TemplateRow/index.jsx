import { Container, Row } from 'react-bootstrap'

const siteLayoutContent = {
    height: '100%',
    backgroundColor: '#f4f4f4',
    color: 'rgb(85, 85, 85)',
    minWidth: '100%'
}

const TemplateRow = ({ 
    rowClassName = '', 
    rowStyle = {}, 
    children 
}) => {
    return (
        <Container 
            style={siteLayoutContent} 
            className='py-5'
        >
            <Row className={rowClassName} style={rowStyle}>
                {children}
            </Row>
        </Container >
    )
}

export default TemplateRow
