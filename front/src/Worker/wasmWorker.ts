import init, { greet } from '../../../wasm/pkg'

await init()

onmessage = (e) => {
  console.log('msg received in worker')
  let greeting = greet(e.data)
  postMessage(greeting)
}

