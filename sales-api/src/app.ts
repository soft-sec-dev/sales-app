import express, {Express, Request, Response} from 'express'
import morgan from 'morgan'

export default class App{
  //? Variables
  private PORT = process.env.PORT || 3000

  //? App var used
  private app:Express = express()
  constructor(){
    this.initializedMiddleware()
    this.initializedRoutes()
  }

  private initializedMiddleware(){
    this.app.use(morgan('dev'))
    this.app.use(express.json())
  }

  private initializedRoutes(){
    this.app.get('/', (req,res)=>{
      res.status(200).json({mgs: 'Hello word', status:'ok'})
    })
  }


  public listen(){
    this.app.listen(this.PORT, ()=>{
      console.log(`http://localhost:${this.PORT}/`)
    })
  }
}