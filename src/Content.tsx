import './Content.css'

type Props = {
    p1: string
    p2: string
}
const Content = ({ p1, p2 }: Props) => {
    return (
        <>
            <p className="tomato">{p1}</p>
            <p>{p2}</p>
        </>
    )
}
export default Content
