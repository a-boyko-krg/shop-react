import { Typography } from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {
    addProductToCart: (total: number, price: number) => void
}
const home = ({addProductToCart}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{ marginBottom: '40px' }}
            >
                List of product
            </Typography>
            <ProductsList addProductToCart={addProductToCart} />
        </>
    )
}
export default home
