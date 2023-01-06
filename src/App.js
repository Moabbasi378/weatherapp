import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import { Panel } from "./componants/Pamel/Panel";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Panel />
      </div>
    </ApolloProvider>
  );
}

export default App;
