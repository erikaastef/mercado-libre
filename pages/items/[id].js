import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import SingleItem from '../../views/SingleItem'

import WhiteContainer from '../../layouts/WhiteContainer'


export default function SelectedItem() {
    const [item, setItem] = useState({})
    const router = useRouter()
    const { id } = router.query

    const fetch = async () => {
        await axios.get(`/api/items/${id}`)
            .then(async (res) => {
                setItem(res.data.item)

                //Signature
                let response = res.data
                response.author.name = "Erika"
                response.author.lastname = "Castillo"
                await axios.post(`/api/items/${id}`, response)
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err.response.data))
            })
            .catch((err) => console.log(err.response.data))
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <SingleItem item={item} />
    )
}

SelectedItem.renderData = {
    layout: WhiteContainer
}
