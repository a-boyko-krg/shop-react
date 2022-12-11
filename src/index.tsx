import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'

type TitleProps = {
    title: string
    text?: string
}

const Title = ({ title, text = 'TEST' }: TitleProps) => {
    return (
        <h1>
            {text} {title}
        </h1>
    )
}
const App = () => {
    return (
        <>
            <Title text="Hello" title="React" />
            <Content
            p1=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                placeat maxime eligendi, assumenda asperiores ducimus delectus
                blanditiis sapiente debitis! Distinctio adipisci nobis illum
                accusamus est exercitationem minus voluptatibus beatae
                molestias."
            p2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                placeat maxime eligendi, assumenda asperiores ducimus delectus
                blanditiis sapiente debitis! Distinctio adipisci nobis illum
                accusamus est exercitationem minus voluptatibus beatae
                molestias."
                />      
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
