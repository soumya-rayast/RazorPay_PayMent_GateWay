import { connect } from "mongoose"

const connectToMongo = async () => {
    try {
        await connect("mongodb://localhost:27017", {
            dbName: "PayMentGateway"
        }
        )
        console.log("Database Connected successfully")
    } catch (error) {
        console.log(error)
    }
}
export default connectToMongo