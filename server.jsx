import { serve } from "https://deno.land/std@v0.34.0/http/server.ts";
import React from 'https://unsafe-production.jspm.io/react';
import ReactDOMServer from 'https://unsafe-production.jspm.io/react-dom/server.js';

function App(props) {
  console.log(props)
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Deno React JSPM</title>
            </head>
            <body>
                <main>
                	<h1>
      					    React running in Deno powered by
      					    <a href="https://jspm.io/">jspm.io</a>
      				    </h1>
                </main>
              
                <footer>
                Hosted on {props.host}
                </footer>
            </body>
        </html>
    );
}


async function run(){
  const markup = ReactDOMServer.renderToString(<App host="Glitch" />);
  console.log(markup)
  const body = new TextEncoder().encode(markup);

  const s = serve({ port: 8000 });
  for await (const req of s) {
    req.respond({ body });
  } 
}

run();