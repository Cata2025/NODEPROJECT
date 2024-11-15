const esPar = require("./numeros.js")
const Logger = require('logplease');
const logger = Logger.create('Test');

logger.info(esPar(2))
logger.error(esPar(3))
logger.error(esPar(101))
logger.error(esPar(201))
logger.info(esPar(202))
logger.info(esPar(100))

console.log(esPar(3))