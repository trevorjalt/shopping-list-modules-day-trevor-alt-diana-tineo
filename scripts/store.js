import item from './item.js';

const items= [];
const hideCheckedItems= false;

function findById(id) {
  return items.find(item => item.id === id);   
}

function addItem(name) {
  try {
    if (item.validateName(name)) {
      this.items.push(item.create(name));
    }
  } catch (e) {
    console.log(e.message);
  }
}

// this.items.push(item.create(name));
// console.log(addItem('Susie'));
// console.log(this.items);

export default {
  items,
  hideCheckedItems,
  addItem
};

// console.log(item);
// console.log(foo);

