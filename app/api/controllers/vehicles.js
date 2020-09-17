const vehicleModel = require("../models/vehicles");

module.exports = {
  getById: function (req, res, next) {
    console.log(req.body);
    vehicleModel.findById(req.params.vehicleId, function (err, info) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Details found!!!",
          data: { vehicles: info },
        });
      }
    });
  },
  getByAccountNumber: function (req, res, next) {
    vehicleModel.findOne({ accountNumber: req.body.accountNumber }, function (
      err,
      info
    ) {
      if (err) {
        next(err);
      } else {
        if (info) {
          res.json({
            status: "success",
            message: "Details found!!!",
            data: { vehicles: info },
          });
        } else {
          res.json({
            status: "success",
            message: "No Data",
          });
        }
      }
    });
  },
  getByIdentityNumber: function (req, res, next) {
    vehicleModel.findOne({ accountNumber: req.body.identityNumber }, function (
      err,
      info
    ) {
      if (err) {
        next(err);
      } else {
        if (info) {
          res.json({
            status: "success",
            message: "Details found!!!",
            data: { vehicles: info },
          });
        } else {
          res.json({
            status: "success",
            message: "No Data",
          });
        }
      }
    });
  },
  getAll: function (req, res, next) {
    let vehiclesList = [];

    vehicleModel.find({}, function (err, vehicles) {
      if (err) {
        next(err);
      } else {
        for (let vehicle of vehicles) {
          vehiclesList.push({
            id: vehicle._id,
            userName: vehicle.userName,
            accountNumber: vehicle.accountNumber,
            emailAddress: vehicle.emailAddress,
            identityNumber: vehicle.identityNumber,
          });
        }
        res.json({
          status: "success",
          message: "data found!!!",
          data: { vehicles: vehiclesList },
        });
      }
    });
  },

  updateById: function (req, res, next) {
    vehicleModel.findByIdAndUpdate(
      req.params.vehicleId,
      { $set: req.body },
      function (err, info) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Data updated successfully!!!",
            data: null,
          });
        }
      }
    );
  },

  deleteById: function (req, res, next) {
    vehicleModel.findByIdAndRemove(req.params.vehicleId, function (err, info) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Data deleted successfully!!!",
          data: null,
        });
      }
    });
  },

  create: function (req, res, next) {
    vehicleModel.create(
      {
        userName: req.body.userName,
        accountNumber: req.body.accountNumber,
        emailAddress: req.body.emailAddress,
        identityNumber: req.body.identityNumber,
      },
      function (err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "Data added successfully!!!",
            data: null,
          });
      }
    );
  },
};
