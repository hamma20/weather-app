const {getCityNames} = require('../../services/weather/names.service');


// create new form or get one form
exports.GetCityNames = async (req, res) => {

    let data = await getCityNames();

    if(data && data.res=== 'success'){
        res.status(201).json(data);
    }else{
        return res.status(400).json(data);
    }
}