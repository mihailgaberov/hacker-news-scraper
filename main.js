const stream = require("stream");
const ndjson = require("ndjson");
const through2 = require("through2");
const request = require("request");
const filter = require("through2-filter");
const sentiment = require("sentiment");
const util = require("util");
const pipeline = util.promisify(stream.pipeline);
const { MongoClient } = require("mongodb");
require('dotenv').config();

(async () => {
    console.log('Connecting to: ', process.env['ATLAS_URI'])
    const client = new MongoClient(process.env["ATLAS_URI"], { useUnifiedTopology: true });
    try {
        await client.connect();
        const collection = client.db("hacker-news").collection("mentions");
        console.log("FINISHED");
    } catch(error) {
        console.log('Error: ', error);
    }
})();
