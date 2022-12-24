type ProductsProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        desc: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A16 Bionic / основная квадро-камера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 256 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 16',
        type: 'phone',
        capacity: '256',
        price: 62999,
        image: '/images/iphone-14pro.jpg',
    },
    {
        id: 2,
        title: 'iPhone 12',
        desc: 'Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A14 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 14',
        type: 'phone',
        capacity: '128',
        price: 32500,
        image: '/images/iphone-12.jpg',
    },
    {
        id: 3,
        title: 'iPhone 13 mini',
        desc: 'Экран (5.4", OLED (Super Retina XDR), 2340х1080) / Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 256 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 15',
        type: 'phone',
        capacity: '256',
        price: 36500,
        image: '/images/iphone-13-mini.jpg',
    },
    {
        id: 4,
        title: 'iPhone 11',
        desc: 'Экран (6.1", IPS (Liquid Retina HD), 1792x828)/ Apple A13 Bionic/ основная двойная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ Nano-SIM/ iOS 13 / 3046 мА*ч',
        type: 'phone',
        capacity: '128',
        price: 25500,
        image: '/images/iphone-11.jpg',
    },
    {
        id: 5,
        title: 'iPhone SE',
        desc: 'Экран (4.7", IPS, 1334x750) / Apple A15 Bionic / основная камера: 12 Мп, фронтальная камера: 7 Мп / 256 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 15',
        type: 'phone',
        capacity: '256',
        price: 20000,
        image: '/images/iphone-SE.jpg',
    },
    {
        id: 6,
        title: 'iPhone 14 Pro Max',
        desc: 'Экран (6.7", OLED (Super Retina XDR), 2796x1290) / Apple A16 Bionic / основная квадро-камера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 16',
        type: 'phone',
        capacity: '128',
        price: 62999,
        image: '/images/iphone-14pro-max.jpg',
    },
]

export default productsArray
