import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello React.js</h1>
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
            <Title />
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
