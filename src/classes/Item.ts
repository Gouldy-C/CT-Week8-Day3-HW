
export default class Item {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description: string){
    this.id = id
    this.name = name,
    this.price = price,
    this.description = description
  }
}
