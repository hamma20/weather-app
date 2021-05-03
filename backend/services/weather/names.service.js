const fs = require("fs");
const path = require("path");

// Create and Save a new Tutorial
exports.getCityNames = async (name) => {

  let list;
  try {
     list = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "../../lib/city.list.json"),
        "utf8"
      )
    );
  } catch (e) {
    return e;
  }
   // create weather
   if(list){
 
    let names=list.map(city =>{
      return city.name;
    })

    return {
      res: "success",
      data:names
    };
 
}else{
  return {
    res: "error",
    error: {
      message: "Some error occurred while getting  city names.",
      code: 421,
    },
  };
}
};