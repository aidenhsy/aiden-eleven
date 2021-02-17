import '../styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri:
      'https://kb3zw5tpsra77myohz7bpz4aua.appsync-api.cn-north-1.amazonaws.com.cn/graphql',
    headers: {
      'x-api-key': 'da2-mi3eu5ufuzg4xff55pobpcgfau',
    },
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
