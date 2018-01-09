import React from "react";
import {
  BlockQuote,
  Cite,
  Text,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Link,
  Slide,
  Image
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import graphqlLogo from "./../assets/graphql-logo.png";
import restVsGraphQl from "./../assets/rest-vs-graphql.png";
import graphqlRequest from "./../assets/graphql-request.png";
import restRequest from "./../assets/rest-request.png";
import graphqlStructure from "./../assets/graphql-structure.png";
import graphiql from "./../assets/graphiql.png";

// Import theme
import createTheme from "spectacle-theme-nova";
// import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme();

// const theme = createTheme({
//   primary: "white",
//   secondary: "#1F2022",
//   tertiary: "#03A9FC",
//   quarternary: "#CECECE"
// }, {
//   primary: "Montserrat",
//   secondary: "Helvetica"
// });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={graphqlLogo} width={250} />
          <Heading size={1} lineHeight={1} textColor="secondary">
            GraphQL
          </Heading>
          <Text margin="10px 0 50px" size={2} fit bold>
            How to get started?
          </Text>
          <Heading margin="100px 0 0 0" size={6}>
            Remco Rakers
          </Heading>
          <Heading margin="20px 0 0 0" size={6}>
            Deloitte Digital DevChat, January 9th, 2018.
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.</Quote>
            <Cite>graphql.org</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2}>What problems does GraphQL solve?</Heading>
          <Heading size={3} textColor="secondary">Managing the increasingly complex data requirements of modern web/mobile apps.</Heading>
        </Slide>

        <Slide transition={["fade"]} align="center flex-start">
          {/* <Heading size={1}>REST request</Heading> */}
          <Image src={restRequest} height={650} bgColor="#fff" />
        </Slide>

        <Slide transition={["fade"]} align="center flex-start">
          {/* <Heading size={1}>GraphQL request</Heading> */}
          <Image src={graphqlRequest} fit bgColor="#fff" />
        </Slide>

        {/* <Slide transition={["fade"]} align="center flex-start">
          <Image src={restVsGraphQl} fit />
        </Slide> */}

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>Why use GraphQL?</Heading>
          <List>
            <ListItem>Single round trip for fetching (complex) data structure</ListItem>
            <ListItem>Single endpoint</ListItem>
            <ListItem>Specified client request language</ListItem>
            <ListItem>Client is in control</ListItem>
            <ListItem>Exact-fetching: no under/over fetching</ListItem>
            <ListItem>Documentation</ListItem>
            <ListItem>No versioning</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} align="center flex-start">
          <Heading size={1}>Structure</Heading>
          <Image src={graphqlStructure} width={"1000"} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3}>Step 1</Heading>
          <Heading size={1} textColor="secondary">Define your schema</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1}>Two server side examples</Heading>
          <Heading size={3} textColor="secondary">In JS and C#</Heading>
        </Slide>

        <CodeSlide
          color="#fff"
          // showLineNumbers={false}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/filmtype.js.example")}
          ranges={[
            { loc: [0, 63], title: "GraphQL film type (JS)" },
            { loc: [0, 3], title: "Declaring the name of the type" },
            { loc: [4, 8], title: "First field: title" },
            { loc: [8, 13], title: "Second field: episode ID" },
            { loc: [35, 40], title: "Connected field: species" }
          ]}
        />

        <CodeSlide
          lang="js"
          color="#fff"
          // showLineNumbers={false}
          transition={[]}
          code={require("raw-loader!../assets/filmtype.cs.example")}
          ranges={[
            { loc: [0, 62], title: "GraphQL film type (C#)" },
            { loc: [0, 8], title: "Declaring the name of the type" },
            { loc: [10, 11], title: "First field: title" },
            { loc: [11, 12], title: "Second field: episode ID" },
            { loc: [33, 40], title: "Connected field: species" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading>GraphQL server implementations</Heading>
          <Heading size={3} margin="100px" textColor="secondary">Javascript, Ruby, PHP, Python, Java, C/C++, Go, Scala, Perl, .NET, Erlang, Elixir, Haskell, SQL, Lua, Elm, Clojure, ClojureScript, Swift, OCaml, Rust, R, Julia, Kotlin</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3}>Step 2</Heading>
          <Heading size={1} textColor="secondary">Inspect your schema</Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1}>GraphiQL</Heading>
          <List>
            <ListItem>Test your schema</ListItem>
            <ListItem>Validate your queries</ListItem>
            <ListItem>Front-enders can explore</ListItem>
            <ListItem>On NPM and NuGet</ListItem>
          </List>
          <Link href="http://graphql.org/swapi-graphql/?query=%7B%0A%20%20allFilms%20%7B%0A%20%20%20%20films%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20director%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A">
            <Image src={graphiql} fit />
          </Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3}>Step 3</Heading>
          <Heading size={1} textColor="secondary">Use your schema</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1}>Client side example</Heading>
          <Heading size={3} textColor="secondary">In React</Heading>
        </Slide>

        <CodeSlide
          lang="js"
          color="#fff"
          // showLineNumbers={false}
          transition={[]}
          code={require("raw-loader!../assets/filmquery.js.example")}
          ranges={[
            { loc: [0, 32], title: "GraphQL film query (React)" },
            { loc: [0, 4], title: "Importing" },
            { loc: [19, 28], title: "Creating film query" },
            { loc: [29, 30], title: "Wrapping FilmList with HOC" },
            { loc: [6, 17], title: "Rendering data" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">Popular GraphQL client libraries</Heading>

          <Heading size={2} textColor="secondary">Apollo</Heading>
          <Heading size={2} textColor="secondary">Relay</Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1}>Common questions</Heading>
          <List>
            <ListItem>Is GraphQL only for Javascript devs?</ListItem>
            <ListItem>How to handle authentication and authorization?</ListItem>
            <ListItem>What about complex queries?</ListItem>
            <ListItem>What about the N+1 problem?</ListItem>
          </List>
        </Slide>

        {/* <Slide transition={["fade"]}>
          <Heading size={1}>Alternatives</Heading>
          <List>
            <ListItem>Falcor: Netflix UI</ListItem>
            <ListItem>OData: Microsoft</ListItem>
          </List>
        </Slide> */}

        <Slide transition={["fade"]}>
          <Heading size={1}>Summary</Heading>
          <List>
            <ListItem>Model your data</ListItem>
            <ListItem>Pick a server-side implementation (or use SaaS tools such as Graphcool)</ListItem>
            <ListItem>Test your schema with GraphiQL</ListItem>
            <ListItem>Implement your first query (or mutation) in your client application</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1}>More info</Heading>
          <List>
            <ListItem><Link href="https://www.howtographql.com/">howtographql.com</Link>: The Fullstack Tutorial for GraphQL</ListItem>
            <ListItem><Link href="https://github.com/chentsulin/awesome-graphql">Awesome GraphQL</Link>: Curated list of GraphQL links</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1}>Thank you!</Heading>
          <Heading margin="100px 0 20px 0" size={4}>Remco Rakers</Heading>
          <Heading size={4}>Deloitte Digital Engineering</Heading>
        </Slide>

      </Deck>
    );
  }
}
