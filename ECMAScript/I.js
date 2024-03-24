//computed property name:
let prop = 'name';
let id = '12345';
let mobile = '558866';

let user = {
    [prop] : 'geet',

    [`user_${id}`]: `${mobile}`
};

console.log(user.name);
console.log(user.user_12345);