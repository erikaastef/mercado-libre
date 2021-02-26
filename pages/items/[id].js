import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import SingleItem from '../../views/SingleItem'

import MainLayout from '../../layouts/Main'
import Breadcrumb from '../../components/Breadcrumb'
import Box from '../../components/Box'
import Preloader from '../../components/Preloader'


export default function SelectedItem() {
    const [item, setItem] = useState({})
    const [preload, setPreload] = useState(true)
    const [categories, setCategories] = useState([])

    const router = useRouter()
    const { id } = router.query

    const fetch = async () => {
        try {
            const promise = await axios.get(`/api/items/${id}`)
            let response = promise.data

            setItem(response.item)
            setCategories(response.categories)
            setPreload(false)

            response.author.name = "Erika"
            response.author.lastname = "Castillo"

            await axios.post(`/api/items/${id}`, response)
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
    }, [])

    return (
        <>
            <Preloader visible={preload} />
            <Breadcrumb categories={categories} />
            <Box>
                <SingleItem item={item} />
            </Box>
        </>
    )
}

SelectedItem.renderData = {
    layout: MainLayout,
    cleanUpSearch: true
}
