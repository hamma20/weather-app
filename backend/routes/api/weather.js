var express = require('express');
var router = express.Router();

const validator = require('../../middleware/validators/weather/addWeather');

const weatherControllers = require('../../controllers/weather/city.controller');
const cityController = require('../../controllers/weather/names.controller');


router
.route('/city-names')
.get(cityController.GetCityNames)

router
.route('/city')
.get(validator.validateGetCityWeather,weatherControllers.GetWeather)


module.exports = router;