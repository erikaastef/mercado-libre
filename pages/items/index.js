import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import SearchResults from '../../views/SearchResults'
import WhiteContainer from '../../layouts/WhiteContainer'

export default function Search() {
    const [items, setItems] = useState('')

    const router = useRouter()
    const { search } = router.query

    const fetch = async () => {
        await axios.get(`/api/items?q=:${search}`)
            .then(async (res) => {
                setItems(res.data.items)

                //Signature
                let response = res.data
                response.author.name = "Erika"
                response.author.lastname = "Castillo"
                await axios.post('/api/items', response)
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err.response.data))

            })
            .catch((err) => console.log(err.response.data))
    }

    useEffect(() => {
        fetch()
    }, [search])

    return (
        <SearchResults items={items} />
    )
}

Search.renderData = {
    layout: WhiteContainer
}
