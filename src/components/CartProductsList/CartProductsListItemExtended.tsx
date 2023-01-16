import { CardContent, Card, Grid, Button } from '@mui/material'
import { ProductsProps } from 'components/Products/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'

type Props = {
    product: ProductsProps
    productCount: number
}

const CartProductsListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12} md={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price} </p>
                    <p>Count: {productCount}</p>
                    <Button variant='outlined'>
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListItemExtended
