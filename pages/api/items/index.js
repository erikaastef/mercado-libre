import axios from 'axios'
const qs = require('qs')

export default async (req, res) => {

    if (req.method === "GET") {
        const query = req.query.q
        const category = req.query.category

        try {
            let filteredItems = []
            let options
            if (category) {
                options = {
                    params: {
                        category: category
                    },
                    paramsSerializer: function (params) {
                        const noColonValue = params.category.replace(/:/g, '');
                        const newParam = {
                            category: noColonValue
                        }
                        return qs.stringify(newParam)
                    },
                }
            } else {
                options = {
                    params: {
                        q: query
                    }
                }
            }
            const promise = await axios.get(`https://api.mercadolibre.com/sites/MLA/search`, options)
            const response = promise.data

            const items = response.results.slice(0, 4)

            const categories = response.filters.length ? response.filters[0].values[0].path_from_root : []

            items.map((item) => {
                filteredItems.push({
                    "id": item.id,
                    "title": item.title,
                    "condition": item.condition,
                    "price": {
                        "currency": item.currency_id,
                        "amount": Math.floor(item.price),
                        "decimals": item.price
                    },
                    "free_shipping": item.shipping.free_shipping,
                    "picture": item.thumbnail,
                    "address": item.address.state_name

                })
            })


            res.status(200).send({
                "author": {
                    "name": "",
                    "lastname": ""
                },
                "categories": categories,
                "items": filteredItems
            });
        }
        catch (err) {
            res.status(500).send(err.response.data);
        };
    }

    if (req.method === "POST") {

        const defaultValues = {
            "author": {
                "name": null,
                "lastname": null
            },
            "categories": [],
            "items": {
                "id": null,
                "title": null,
                "condition": null,
                "price": {
                    "currency": null,
                    "amount": null,
                    "decimals": null
                },
                "free_shipping": null,
                "picture": null,
                "address": null

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
