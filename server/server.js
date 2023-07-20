const express = require("express");
const cors = require("cors");
const bodyparse = require("body-parse");

const app = express();
app.use(express.static("pblic"));
app.use(bodyparse.urlencoded({ extended: false}));
app.use(bodyparse.json());
app.use(cors({ origin: true,credentials: this}));

const stripe = require("stripe"("sk_test_51NVV60A2H8Svm0mp8ci09JfAHKfTEeag4HND7tyn4Oq3C6XsZ1fXvPpjHdgA3xpPJAC2bdaqhxlM1x1526tqc3aL00Dwq4sPFe"));

app.post("/checkout", async (req, res, next) =>{
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.items.map((item) => ({
                price_data: {
                currency: 'usd',
                    product_data: {
                    name: item.name,
                    images: [item.product]
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            })),
            mode: "payment",
            success_url: "http://localhost:4242/success,html",
            cancel_url: "http://localhost:4242/cancel,html",
        });
        res.status(2000).json(session);
    } catch (error) {
        next(error);
    }
});

app.listen(57632, () => console.log('app is running on 4242'));