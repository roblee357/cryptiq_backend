/* polyfill to let us generate uuids */
const { v4 : uuidv4 } = require('uuid');

module.exports = () => {
  return uuidv4();
}
