const {javascript} = require('./javascript.js')
const module = new javascript 
if (module.connect() === true) {
    console.log('Connection successful')
}
else {
     console.log('Connection unsuccessful');
    
}