module.exports = app => {
    const vehicle = require("../controller/vehicle.controller.js");
    
    // Retrieve all Vehicles
    app.get("/vehicles", vehicle.findAll);
  
    // Single Vehicle with ID
    app.get("/vehicles/:vehiclesId", vehicle.findOne);
  
    // Delete a VEhicle with Id
    app.delete("/vehicles/:vehiclesId", vehicle.delete);
  
    // DELETE ALL VEHICLES
    app.delete("/vehicles", vehicle.deleteAll);
  };