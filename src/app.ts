import cors from 'cors'
import exphbs from 'express-handlebars'
import express from 'express'
import session from 'express-session'
import ssoRoutes from './routes/routes'
import { config } from 'dotenv'
import { isAuthenticated } from './middlewares/isAuthenticated'

config()

class App {
  private app = express()
  private port = process.env.PORT

  constructor() {
    this.middlewares()
    this.routes()
    this.static()
    // this.handlebars()
  }

  private handlebars() {
    this.app.engine('handlebars', exphbs.engine())
    this.app.set('view engine', 'handlebars')
  }

  private static() {
    this.app.use(express.static('../public'))
  }

  private middlewares() {
    this.app.use(session({
      secret: 'asdfghjklç',
      resave: false,
      saveUninitialized: true
    }))
    this.app.use(isAuthenticated)
    this.app.use(cors())
  }

  private routes() {
    this.app.get('/i-digital', ssoRoutes)
  }

  public server() {
    console.clear()
    this.app.listen(this.port, () => console.log(`App started on port ${this.port}`))
  }


}

export default App