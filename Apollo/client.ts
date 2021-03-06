import {useMemo} from 'react'
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'
import {concatPagination} from '@apollo/client/utilities'
import merge from 'ts-deepmerge'
import isEqual from 'lodash/isEqual'

// Apollo Client
//const client = new ApolloClient({
//uri: "http://localhost:5000/api/graphql",
//cache: new InMemoryCache(),
//credentials: "include",
//});

//export default client;

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'
const PREFETCH_URI = `http://172.28.0.1:5000`
const URI = `http://localhost:5000`

let apolloClient: any;

function createApolloClient(prefetch = false) {
	const API = prefetch ? PREFETCH_URI : URI ;
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: `${API}/api/graphql`, // Server URL (must be absolute)
			credentials: 'include', // Additional fetch() options like `credentials` or `headers`
		}),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						allPosts: concatPagination(),
					},
				},
			},
		}),
	})
}

export function initializeApollo(initialState = null , prefetch = false) {
	const _apolloClient = apolloClient ?? createApolloClient(prefetch)

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract()

		// Merge the initialState from getStaticProps/getServerSideProps in the existing cache
		const data = merge(existingCache, initialState, {
			// combine arrays using object equality (like in sets)
			arrayMerge: (destinationArray: [any], sourceArray: [any]) => [
				...sourceArray,
				...destinationArray.filter((d) =>
					sourceArray.every((s) => !isEqual(d, s))
				),
			],
		})

		// Restore the cache with the merged data
		_apolloClient.cache.restore(data)
	}
	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient

	return _apolloClient
}

export function addApolloState(client: any, pageProps: any) {
	if (pageProps?.props) {
		pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
	}

	return pageProps
}

export function useApollo(pageProps: any) {
	const state = pageProps[APOLLO_STATE_PROP_NAME]
	const store = useMemo(() => initializeApollo(state), [state])
	return store
}
