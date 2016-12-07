// Fetch the name of the first pet from each owner
var ownerArr = [{
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];

// Array's map method.
var xx = ownerArr.map(function (owner) {
    return owner.pets[0].name
})
console.log(xx)

// import _ from 'lodash'

// Lodash
// _.map(ownerArr, 'pets[0].name')