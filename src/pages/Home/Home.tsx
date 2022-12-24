import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {}
const home = (props: Props) => {
    return (
        <>
            <Typography 
            variant="h4" 
            align="center" 
            sx={{marginBottom: '40px',
            }}
            >
                List of product
            </Typography>
            <ProductsList/>
        </>
    )
}
export default home
