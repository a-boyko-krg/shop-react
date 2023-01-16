import { Grid, Typography } from '@mui/material'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartProductsListItemExtended from 'components/CartProductsList/CartProductsListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                sx={{
                    m: '0 30px',
                }}
            ></Typography>
            <Grid container spacing={4}>
                <CartProductsList
                    productsInCart={productsInCart}
                    CartItem={CartProductsListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
