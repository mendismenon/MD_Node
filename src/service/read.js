const { TB_MD_LOGIN } = require("../TableConstants");

const getMembers = async (dynamoClient) => {
    const params = {
        TableName: TB_MD_LOGIN
    }

    const members = await dynamoClient.scan(params).promise()
    console.log(members)
    return members
};


module.exports = getMembers;
