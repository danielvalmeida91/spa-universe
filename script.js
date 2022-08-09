import { Router } from './js/router.js'
import Events from './js/events.js'
import {
  backgroundImage,
  home,
  universe,
  exploration,
  urls
} from './js/elements.js'

const router = new Router()

const events = Events({ backgroundImage })

router.add('/', '/pages/home.html')
router.add('/exploration', '/pages/exploration.html')
router.add('/universe', '/pages/universe.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

home.addEventListener('click', () => {
  events.changeBackgroundImage(urls['/'])
  //events.changeBackgroundImage('./images/mountains-universe-1.png')
})

universe.addEventListener('click', () => {
  events.changeBackgroundImage(urls['/universe'])
  //events.changeBackgroundImage('./images/mountains-universe-2.png')
})

exploration.addEventListener('click', () => {
  events.changeBackgroundImage(urls['/exploration'])
  //events.changeBackgroundImage('./images/mountains-universe-3.png')
})
