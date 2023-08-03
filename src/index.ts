import * as cf from './cartFunction'


const user = cf.createUser('christian', 29)

const pear = cf.createItem('pear', 1.99, 'asian pear') //Item A
const banana = cf.createItem('banana', 0.25, 'yellow banana')//Item B
const cake = cf.createItem('cake', 15.99, 'the cake is a lie')//Item C

cf.addToCart(user,pear,1)
cf.printCart(user)
cf.cartTotal(user)

cf.addToCart(user,banana,3)
cf.printCart(user)
cf.cartTotal(user)

cf.addToCart(user,cake,3)
cf.printCart(user)
cf.cartTotal(user)

cf.removeFromCart(user,banana)
cf.printCart(user)
cf.cartTotal(user)

cf.removeQuantityFromCart(user,cake,2)
cf.printCart(user)
cf.cartTotal(user)

