import {Card,CardHeader,CardBody,CardFooter,Typography,Button} from "@material-tailwind/react"
export default function ProductCard()
{
    return(
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
                <Button className="w-full bg-[#1B9CFC]">Buy Now</Button>
            </CardFooter>
        </Card>
    )
}