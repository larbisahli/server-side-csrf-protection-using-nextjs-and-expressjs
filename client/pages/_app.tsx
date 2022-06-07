import '@styles/main.css';
import type { AppProps } from 'next/app';
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
import { apiURL } from '@utils/index';

const httpLink = new HttpLink({
  uri: `${apiURL}/graphql`,
  credentials: 'include'
});

const retryLink = new RetryLink({
  delay: {
    initial: 1000,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => {
      console.log(`retryIf`, { error, _operation });
      return !!error;
    }
  }
});

const client = new ApolloClient({
  link: from([retryLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false
  })
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
