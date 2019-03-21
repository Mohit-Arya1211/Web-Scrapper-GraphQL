const { GraphQLServer } = require('graphql-yoga')
const schema = require('graphql-scraper')

const server = new GraphQLServer({ schema })
server.start(({ port }) => {
  console.log(
    `graphql-scraper started on http://localhost:${port}/`
  )
})
