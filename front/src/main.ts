import './style.css'

let worker: Worker | null = null
if (!worker && window.Worker) {
  worker = new Worker(new URL('./Worker/wasmWorker.ts', import.meta.url), {type: 'module'})
  console.log('worker created')
}

worker!.onmessage = (e)=> {
  let msgString = e.data
  element.innerText = msgString
  input.value = ''
}

const greetBtnHandler = (e: Event)=> {
  e.preventDefault()
  worker?.postMessage(input.value)
}

const app = document.querySelector<HTMLDivElement>('#app')!

const element = document.createElement('h1')
element.innerText = 'hi'
app.appendChild(element)

const button = document.createElement('button')
button.innerText = 'ready?'
button.addEventListener('click', greetBtnHandler)

const input = document.createElement('input')
input.placeholder = "name"

const form = document.createElement('form')

form.append(input, button)

app.append(form)
