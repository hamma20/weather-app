const {createWeather} = require('../../services/weather/add.service');


// create new form or get one form
exports.GetWeather = async (req, res) => {

    let data = await createWeather(req.query.name);

    if(data && data.res=== 'success'){
        res.status(201).json(data);
    }else{
        return res.status(400).json(data);
    }
}