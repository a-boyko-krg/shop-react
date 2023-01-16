import {
    Card,
    CardActions,
    CardContent,
    Button,
    } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'


type Props = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}

const ProductsListItem = ({
    id,
    title,
    desc,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState: number) => prevState + 1)
    }
    const onDecrement = () => {
        setCount((prevState: number) => prevState - 1)
    }

    

    return (
        <Card className="product-list-item">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="iphone" />
                </div>
                <h4 className="product-title">{title}</h4>
                <p className="product-desc">{desc}</p>
                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity} gb
                </div>
                <div className="product-price">{price}₴ </div>
                <Quantity count={count} onDecrement={onDecrement} onIncrement={onIncrement}/>
            </CardContent>

            <CardActions className="btns-wrap">
                <Button 
                variant="outlined"
                onClick={() => addProductToCart(id, count)}>Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
