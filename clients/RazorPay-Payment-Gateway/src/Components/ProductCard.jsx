import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react"
import theme from "@material-tailwind/react/theme";
import { useState } from "react"
export default function ProductCard() {
    const [amount, setamount] = useState(350);

    const handlePayment = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/order`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    amount
                })
            })
            const data = await res.json();
            console.log(data);
            handlePaymentVerify(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    // handle verify payment function 
    const handlePaymentVerify = async (data) => {
        const options = {
            key: ({}).RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: data.currency,
            name: "Soumya",
            description: "Test Mode",
            order_id: data.id,
            handler: async (response) => {
                console.log("response", response)
                try {
                    const res = await fetch(`${({}).VITE_BACKEND_HOST_URL}/api/payment/verify`, {
                        method: "POST",
                        header: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        })
                    })
                    const verifyData = await res.json();
                    if (verifyData.message) {
                        TransformStream.success(verifyData.message)
                    }
                }
                catch (error) {
                    console.log(error)
                }
            },
            theme: {
                color: "#5f63b8"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();

    }
    return (
        <Card className="mt-6 w-96 bg-[#222f39] text-white">
            <CardHeader color="" className="relative h-96 bg-[#2C3A47]">
                <img src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/tshirts/pack-of-five-plain-tshirt-white/1.webp" alt="card-image" />
            </CardHeader>
            <CardBody>
                <Typography >
                    My First Product
                </Typography>
                <Typography>
                    Rs.199 <span className="line-through">Rs.399</span>
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={handlePayment} className="w-full bg-[#1B9CFC]">Buy Now</Button>
            </CardFooter>
        </Card>
    )
}