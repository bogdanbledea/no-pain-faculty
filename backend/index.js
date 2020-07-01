const express = require('express')
const graphqlHTTP = require('express-graphql')
const graphql = require('graphql')
const { Client } = require('pg')
const dotenv = require('dotenv');
const joinMonster = require('join-monster')

dotenv.config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false
  }
})
client.connect();

const Course = new graphql.GraphQLObjectType({
  name: 'Course',
  fields: () => ({
    idCourse: { type: graphql.GraphQLInt },
    courseName: { type: graphql.GraphQLString }
  })
});

Course._typeConfig = {
  sqlTable: 'courses',
  uniqueKey: 'idCourse',
}

const QueryRoot = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getCourses: {
      type: new graphql.GraphQLList(Course),
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster.default(resolveInfo, {}, sql => {
          return client.query(sql)
        })
      }
      }
  })
})

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);