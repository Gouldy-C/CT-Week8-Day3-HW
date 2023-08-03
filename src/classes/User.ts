import Item from './Item'


export default class User {
  constructor(
    public id: string,
    public name: string,
    public age: number,
    public cart: Item[] = []){
      this.id = id,
      this.name = name,
      this.age = age,
      this.cart = cart
    }
}
