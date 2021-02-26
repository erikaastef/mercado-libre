import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import SearchResults from '../../views/SearchResults'
import MainLayout from '../../layouts/Main'

import Breadcrumb from '../../components/Breadcrumb'
import Box from '../../components/Box'
import Preloader from '../../components/Preloader'

export default function Search() {
    const [items, setItems] = useState('')
    const [preload, setPreload] = useState(true)
    const [categories, setCategories] = useState([])

    const router = useRouter()
    const { search, category } = router.query

    const fetch = async () => {
        if (!preload) setPreload(true)
        let url
        if (category) {
            url = `/api/items?category=:${category}`
        } else {
            url = `/api/items?q=:${search}`
        }
        try {
            const promise = await axios.get(url)
            let response = promise.data

            setItems(response.items)
            setCategories(response.categories)
            setPreload(false)
            response.author.name = "Erika"
            response.author.lastname = "Castillo"

            await axios.post('/api/items', response)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err.response.data))

        }
        catch (err) {
            router.push('/')
            console.log(err.response.data)
        }

    }

    useEffect(() => {
        fetch()
    }, [search, category])

    return (
        <>
            <Preloader visible={preload} />
            <Breadcrumb categories={categories} />
            <Box>
                <SearchResults items={items} />
            </Box>
        </>
    )
}

Search.renderData = {
    layout: MainLayout
}
