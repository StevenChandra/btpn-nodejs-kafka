const financesModel = require("../models/finances");

module.exports = {
  getById: function (req, res, next) {
    financesModel.findById(req.params.financesId, function (err, info) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Details found!!!",
          data: { finances: info },
        });
      }
    });
  },
  getByLoanNumber: function (req, res, next) {
    financesModel.findOne({ loanNumber: req.body.loanNumber }, function (
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
            data: { finances: info },
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
  getByLoanCreditor: function (req, res, next) {
    financesModel.findOne({ loanCreditor: req.body.loanCreditor }, function (
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
            data: { finances: info },
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
    let dataList = [];

    financesModel.find({}, function (err, finances) {
      if (err) {
        next(err);
      } else {
        for (let finance of finances) {
          dataList.push({
            id: finance._id,
            userName: finance.userName,
            accountNumber: finance.accountNumber,
            loanCreditor: finance.loanCreditor,
            identityNumber: finance.identityNumber,
          });
        }
        res.json({
          status: "success",
          message: "data found!!!",
          data: { finances: dataList },
        });
      }
    });
  },

  updateById: function (req, res, next) {
    financesModel.findByIdAndUpdate(
      req.params.financesId,
      { name: req.body.name },
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
    financesModel.findByIdAndRemove(req.params.financesId, function (
      err,
      info
    ) {
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
    financesModel.create(
      {
        userName: req.body.userName,
        identityNumber: req.body.identityNumber,
        loanNumber: req.body.loanNumber,
        loanCreditor: req.body.loanCreditor,
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
