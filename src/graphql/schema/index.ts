//TODO this is test

import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Product{
        id: ID!,
        name: String,
        description: String,
        price:Float!,
        categories:[String],
        manufacturer:String
    }

    type Query{
        test:Boolean
        listProducts(limit:Int,category:String):[Product!]!
        getProduct(id:String!):Product
    }
`
/*
    type Partido{
        id: ID!
        equipo1:String!,
        equipo2:String!,
        resultado:String!,
        minuto:Int!,
        finalizado:Boolean!
  }

  type Query {
    listMatches:[Partido!]!
    getMatch(id:String!):Partido!
  }
  type Mutation {
    setMatchData(id:String!,resultado:String,minuto:Int,ended:Boolean):Partido!
    startMatch(team1:String,team2:String!):Partido!
  }

  type Subscription {
    subscribeMatch(id:String!):Partido
  }
*/