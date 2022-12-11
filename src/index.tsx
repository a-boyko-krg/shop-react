import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    title: string
    text?: string
    num?: number
}

const Title = ({title, text='Test'}: TitleProps) => {
    return (
        <h1>
            {text} {title}
        </h1>
    )
}

const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
                aliquid ea veritatis quae voluptates ratione nisi dolorum illo
                saepe odio beatae culpa fugit distinctio ad corporis expedita
                earum consequatur veniam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
                aliquid ea veritatis quae voluptates ratione nisi dolorum illo
                saepe odio beatae culpa fugit distinctio ad corporis expedita
                earum consequatur veniam.
            </p>
        </>
    )
}

const App = () => {
    return (
        <>
            <Title text="Hello" title="Буратино" />
            <Title text="Привет" title="Алиса" />
            <Title title="Базилио" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
