import { v4 as uuidv4 } from 'uuid'

import User from './classes/User'
import Item from './classes/Item'


export function createItem(name: string, price: number, description: string):Item{
  const id = uuidv4()
  const item = new Item(id, name, price, description)
  return item
}

export function createUser(name: string, age: number):User{
  const id = uuidv4()
  const user = new User(id, name, age)
  return user
}

export function addToCart(user: User, item: Item, qty: number): void{
  for (let i = 0; i < qty; i++){
    user.cart.push(item)
  }
}

export function removeFromCart(user: User, item: Item): void{
  for (let i = 0; i < user.cart.length; i++){
    if (user.cart[i].id === item.id){
      user.cart.splice(i, 1)
      i--
    }
  }
}

export function removeQuantityFromCart(user: User, item: Item, qty:number): void{
  let count = 0
  for (let x = 0; x < user.cart.length; x++){
    if (count === qty) {break}
    if (user.cart[x].id === item.id){
      user.cart.splice(x, 1)
      x--
      count++
    }
  }
}

export function cartTotal(user: User): number{
  let res = 0
  for (const item of user.cart) {
    res += item.price
  }
  return res
}

export function printCart(user: User): void{
  for (const item of user.cart) {
    console.log(item.name);
  }
}