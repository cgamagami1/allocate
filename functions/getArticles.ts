import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import fetch, { Headers } from "node-fetch";

const options = {
	method: "GET",
	headers: new Headers(
    {
      "X-RapidAPI-Key": String(process.env.X_RAPIDAPI_KEY),
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com"
    }
  )
};

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const response = await fetch("https://seeking-alpha.p.rapidapi.com/articles/v2/list-trending?size=20", options);
  const data = await response.json();  

  return {
    statusCode: 200,
    body: JSON.stringify({ data })
  }
}

export { handler };