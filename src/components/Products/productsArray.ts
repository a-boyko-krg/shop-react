type ProductsProps = {
   title: string
   desc: string
   type: string
   capacity: string
   price: number
}

const productsArray = [
    {
        title: 'iPhone SX',
        desc: 'This is iPhone X',
        type: 'phone',
        capacity: '32',
        price: 250,
    },
    {
        title: 'iPhone X',
        desc: 'This is iPhone X',
        type: 'phone',
        capacity: '64',
        price: 500,
    },
    {
        title: 'iPhone XS',
        desc: 'This is iPhone XS',
        type: 'phone',
        capacity: '256',
        price: 300,
    },
    {
        title: 'iPhone 13 Pro',
        desc: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 500,
    },
    {
        title: 'iPhone 14 Pro',
        desc: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
    },
    {
        title: 'iPhone XXL',
        desc: 'This is iPhone XXL',
        type: 'phone',
        capacity: '128',
        price: 1500,
    },
]

export default productsArray