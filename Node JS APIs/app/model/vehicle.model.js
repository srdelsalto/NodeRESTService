var sql = require("./db.js");

// constructor
const Vehicle = function (vehicle) {
    this.id = vehicle.id;
    this.brand = vehicle.brand;
    this.model = vehicle.model;
};

Vehicle.getAllPublication = function (result) {
    sql.query("SELECT * FROM vehicles", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log('Vehicles: ', res);
      result(null, res);
    });
  };

Vehicle.findById = (publicationId, result) => {
    sql.query(`SELECT * FROM vehicles WHERE veh_id = ?`, publicationId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Vehicle: ", res[0]);
      result(null, res[0]);
      return;
    }

    console.log(Query, err);
    // not found Publication with the id
    result({ kind: "not_found" }, null);
  });
};

Vehicle.remove = (id, result) => {
  sql.query("DELETE FROM vehicles WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Publication with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Publication with id: ", id);
    result(null, res);
  });
};

Vehicle.removeAll = result => {
  sql.query("DELETE FROM vehicles", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Publications`);
    result(null, res);
  });
};

module.exports = Vehicle;