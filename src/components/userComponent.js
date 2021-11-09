import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component loaded")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1= new User(1,"Ozan","Öztürk","İstanbul")
let user2= new User(2,"Lila","Akça","Kırşehir")
userService.add(user1)
userService.add(user2)


console.log(userService.list())
console.log(userService.getById(2))








userService.getById(1)
userService.list()

let customer={id:1,firstName:"Ozan"}

//prototyping.Sonradan değer ekleyebilmemiz
customer.lastName="Öztürk"
console.log(customer.lastName)