import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductsListItem.scss'

type Props = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

class ProductsListItem extends Component <Props> {
    render() {
        return (
            <Card className="product-list-item">
                <CardContent>
                    <div className="product-img">
                        <img src={this.props.image} alt="iphone" />
                    </div>
                    <h4 className="product-title">{this.props.title}</h4>
                    <p className="product-desc">{this.props.desc}</p>
                    <div className="product-features">
                        <span>Type:</span> {this.props.type}
                    </div>
                    <div className="product-features">
                        <span>Capacity:</span> {this.props.capacity} gb
                    </div>
                    <div className="product-price">{this.props.price}₴ </div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value="1" />
                        <Button variant="outlined">+</Button>
                    </div>
                </CardContent>

                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

// const ProductsListItem = ({
//     title,
//     desc,
//     type,
//     capacity,
//     price,
//     image,
// }: Props) => {}
export default ProductsListItem
