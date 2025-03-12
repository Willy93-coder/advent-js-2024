type Inventory = Array<{ name: string, quantity: number, category: string }>

function organizeInventory(inventory: Inventory): object {
  let result: any = {}
  inventory.forEach((item) => {
    let { name, quantity, category } = item
    if (!(category in result)) result[category] = {}
    result[category][name] = (result[category][name] || 0) + quantity
  })
  return result
}

export default organizeInventory;