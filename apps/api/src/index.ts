// import { Hono } from 'hono'

import { getData } from "./lib/apollo";
import * as util from "util";

// const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

// export default app

async function main() {
  console.log(
    util.inspect(await getData(), {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );
}

main();
