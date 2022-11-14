import gql from 'graphql-tag';
import { z } from 'zod';

const envSchema = z.object({
  GITHUB_TOKEN: z.string()
})

const env = envSchema.parse(process.env)

export const fetchPinnedRepos = async (username: string) => {

  const query = gql`
    {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              stargazerCount
              forkCount
              url
              homepageUrl
              createdAt
              primaryLanguage {
                name
              }
            }
          }
        }
      }
    }
  `

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      query: query.loc?.source.body
    }),
    next: {
      revalidate: 60 * 60 * 8 // every 8 hours
    }
  })

  const data = await response.json()

  const result = await schema.parseAsync(data)

  const repos = result.data.user.pinnedItems.nodes

  return repos.sort((repoA, repoB) => {
    const timeA = repoA.createdAt.getTime()
    const timeB = repoB.createdAt.getTime()
    return timeB - timeA
  })
}

const schema = z.object({
  data: z.object({
    user: z.object({
      pinnedItems: z.object({
        nodes: z.array(
          z.object({
            id: z.string(),
            name: z.string().transform((name) => capitalizeWords(name.replaceAll('-', ' '))),
            description: z.string(),
            stargazerCount: z.number(),
            forkCount: z.number(),
            url: z.string().url(),
            homepageUrl: z.string().nullable().transform((url) => url === "" ? null : url),
            createdAt: z.string().transform((date) => new Date(date)),
            primaryLanguage: z.object({
              name: z.string()
            }).transform(({ name }) => name)
          })
        )
      })
    })
  })
})

// modified from https://bobbyhadz.com/blog/javascript-capitalize-first-letter-of-each-word-in-array#:~:text=To%20capitalize%20the%20first%20letter,array%20with%20all%20words%20capitalized.
function capitalizeWords(arr: string) {
  return arr
    .split(' ')
    .map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    })
    .join(' ')
}