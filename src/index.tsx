import React from 'react'
import ReactDOM from 'react-dom/client'
import Content, {test} from './Content'

type TitleProps = {
    title: string
    text?: string
    num?: number
}

const Title = ({ title, text = 'Test' }: TitleProps) => {
    return (
        <h1>
            {text} {title}
        </h1>
    )
}

const App = () => {
    return (
        <>
            <Title text="Hello" title="Буратино" />
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
