type Inventory = Array<{ name: string, quantity: number, category: string }>

function organizeInventory(inventory: Inventory): object {
  const categories = Array.from(new Set<string>(inventory.map(item => item.category)))
  const names = Array.from(new Set<string>(inventory.map(item => item.name)))

  return {}
}

const inventoryArr = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventoryArr)

export default organizeInventory;