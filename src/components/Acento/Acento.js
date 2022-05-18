import {useParams} from 'react-router-dom'

export default function Acento ({
    items
}) {
    const {items.id} = useParams();
    console.log(items.id)
}