import axios from 'axios'

export default async (req, res) => {

    if (req.method === "GET") {
        const query = req.query.q

        await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`)
            .then(response => {
                const results = response.data.results.slice(0, 4)
                let filteredItems = []
                console.log(response.data)
                results.map((item) => {
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
                    "categories": [],
                    "items": filteredItems
                });
            })
            .catch(err => {
                res.status(500).send(err.response.data);
            });
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
