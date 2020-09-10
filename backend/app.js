const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const MovieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const cors = require('cors')

const mongoose = require('mongoose')
// connect mongodb
mongoose
  .connect('mongodb://localhost:27017/reactgraphql', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log('Error', err))

const rootValue = {
  name: () => {
    return 'my name'
  },
}

app.use(cors())

// Setting Graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: MovieSchema,
    rootValue: resolvers,
    graphiql: true,
  }),
)

app.get('/', (req, res) => {
  res.send('hello backend')
})
app.listen(4000, () => {
  console.log('server runing on port 4000')
})
