const db = require('../models/index')
const Measurement = db.measurements;

exports.find = (req, res, next) => {
  const unit = req.query.unit ? req.query.unit : '';
  Measurement.find({ unit: { $regex: unit, $options: "i" } })
    .then((result) => {
      res.send({
        success: true,
        data: result
      });
    })
    .catch((err) => {
      next(err);
    })
}

exports.create = (req, res, next) => {
  const measurement = new Measurement({
    unit: req.body.unit,
    description: req.body.description
  })

  measurement.save()
    .then((result) => {
      res.send({
        success: true,
        message: `Measurement [${result.name}] successfully added!`
      });
    })
    .catch((err) => {
      if (err.code == 11000) {
        res.status(422).send({
          success: false,
          message: `Measurement [${result.name}] is already exists!`
        });
      }
      next(err);
    })
}

exports.updateOne = async (req, res, next) => {
  const id = new db.mongoose.Types.ObjectId(req.params.id);
  const update = req.body;
  const measurement = await Measurement.findOne({ _id: id }).exec();
  if (measurement) {
    for (let field in update) {
      measurement[field] = update[field];
    }

    measurement.save()
      .then((result) => {
        res.send({
          success: true,
          message: `Measurement [${result.name}] successfully updated!`
        });
      })
      .catch((err) => {
        next(err);
      })
  }
  else {
    res.status(422).send({
      success: false,
      message: `Category not found!`
    });
  }
}

exports.deleteOne = async (req, res, next) => {
  const id = new db.mongoose.Types.ObjectId(req.params.id);
  const measurement = await Measurement.findOne({ _id: id }).exec();
  if (measurement) {
    measurement.deleteOne()
      .then(() => {
        res.send({
          success: true,
          message: `Measurement [${measurement.name}] successfully removed!`
        });
      })
      .catch((err) => {
        next(err);
      })
  }
  else {
    res.status(422).send({
      success: false,
      message: `Measurement not found!`
    });
  }
}