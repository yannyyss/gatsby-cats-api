// Import Libraries
const axios = require('axios')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions

    // Download data from a remote API.
    const data = await axios.get('https://cat-fact.herokuapp.com/facts')

    // Process data and create nodes.using a custom processDatum function
    data.data.forEach(node => createNode({
        id: createNodeId(node._id),
        parent: null,
        type: node.type,
        text: node.text,
        user: node.user,
        internal: {
            type: `CatServer`,
            contentDigest: createContentDigest(node)
        }
    }))

    console.log('data',data.data)
    return
}