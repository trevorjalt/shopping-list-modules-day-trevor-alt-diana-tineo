import item from './item.js';

const items= [];
const hideCheckedItems= false;

const findById = function(id) {
  return items.find(item => item.id === id);   
};

const addItem = function(name) {
  try {
    if (item.validateName(name)) {
      this.items.push(item.create(name));
    }
  } catch (e) {
    console.log(e.message);
  }
};

const findAndToggleChecked = function(id) {
  const foundItem = (findById(id));
  foundItem.checked = !foundItem.checked;
};

const findAndUpdateName = function(id, newName) {
  try {
    if (item.validateName(newName)) {
      let item = findById(id);
      item.name = newName;
    }
  } catch (e) {
    console.log(`Cannot update name: ${e.message}`);
  }
};

// console.log(items);

const findAndDelete = function(id) {
  this.items = this.items.filter(item => item.id !== id);
  // const index = this.items.findIndex(item => item.id === id);
  // this.items.splice(index, 1);
};

// const deleteListItem = function (id) {
  // const index = store.items.findIndex(item => item.id === id);
  // store.items.splice(index, 1);
// };



// this.items.push(item.create(name));
// console.log(addItem('Susie'));
// console.log(this.items);

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
};

// console.log(item);
// console.log(foo);

