const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');


// middlewear
app.use(cors())
app.use(express.json());

// pHero_user
// zlT0LYqvZBSeLlp3


const uri = "mongodb+srv://pHero_user:zlT0LYqvZBSeLlp3@cluster0.faflb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect()
        const dataColection = client.db('phero').collection('pheroTask')

        app.get('/data', async (req, res) => {
            const query = {}
            const cursor = dataColection.find(query)
            const result = await cursor.toArray()
            res.send(result)
        });

    }
    finally {

    }
}
run().catch(console.dir)


app.get('/', (req, res) => {
    res.send('Hello ')
})

app.listen(port, () => {
    console.log(`Phero apps listening on port ${port}`);
})