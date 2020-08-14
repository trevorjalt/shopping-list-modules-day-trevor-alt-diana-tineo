const foo = 'bar';

function validateName(name) {
  if (!name) {
    throw new TypeError('Name must not be blank');
  }
  return name;
}

// console.log(validateName("susie"))

function create(name) {
  const item = 
        {id: cuid(), name: name, checked: false};

   return item;
}

// console.log(create('Susie'));

export default {
  validateName,
  create
};