const mongoose = require('mongoose');
const Model = require('../models/schema');

exports.post = async (req, res) => {
  try {
    const postingData = await new Model({
      name: req.body.name,
      email: req.body.name,
      message: req.body.message,
    });
    const saving = await postingData.save();

    console.log(postingData);
    return res.redirect('/');
  } catch (e) {
    console.log(e);
    return res.redirect('/');
  }
};
