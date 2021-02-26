import axios from 'axios'

export default async (req, res) => {

    if (req.method === "GET") {
        const {
            query: { id },
        } = req

        let item;
        let description;
        let categories;

        try {
            const itemPromise = await axios.get(`https://api.mercadolibre.com/items/${id}`)
            item = itemPromise.data

            const categoriesPromise = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${item.category_id}`)
            const categoriesData = categoriesPromise.data
            categories = categoriesData.filters.length ? categoriesData.filters[0].values[0].path_from_root : []

            const descriptionPromise = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
            description = descriptionPromise.data ? descriptionPromise.data.plain_text : ''
        }
        catch (err) {
            console.log(err.response.data)
        }
        finally {
            res.status(200).send({
                "author": {
                    "name": "",
                    "lastname": ""
                },
                "categories": categories,
                "item": {
                    "id": item.id,
                    "title": item.title,
                    "condition": item.condition,
                    "price": {
                        "currency": item.currency_id,
                        "amount": Math.floor(item.price),
                        "decimals": item.price
                    },
                    "sold_quantity": item.sold_quantity,
                    "free_shipping": item.shipping.free_shipping,
                    "picture": item.thumbnail,
                    "description": description
                }
            });
        }




    }
    if (req.method === "POST") {

        const defaultValues = {
            "author": {
                "name": null,
                "lastname": null
            },
            "categories": [],
            "item": {
                "id": null,
                "title": null,
                "condition": null,
                "price": {
                    "currency": null,
                    "amount": null,
                    "decimals": null
                },
                "sold_quantity": null,
                "free_shipping": null,
                "picture": null,
                "description": null

            }
        }
        const { author } = { ...defaultValues, ...req.body };

        if (!author.name) {
            res.status(400).end(JSON.stringify({ message: "Falta el nombre en la firma." }));
        }
        if (!author.lastname) {
            res.status(400).end(JSON.stringify({ message: "Falta el apellido en la firma" }));
        }

        res.status(200).send({ message: "firma exitosa" })
    }
}