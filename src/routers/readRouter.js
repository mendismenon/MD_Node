const express = require("express");
const AWS = require('../dynamodb');
const getMembers = require('../service/read');
const readRouter = new express.Router();

const dynamoClient = new AWS.DynamoDB.DocumentClient();

readRouter.get('/allTest', async (req, res) => {
    try {
            const members = await getMembers(dynamoClient);
            res.json(members)
    } catch (error) {
            console.error(error)
            res.status(500).json({err: `Something went wrong`})
    }
})

module.exports = { readRouter };