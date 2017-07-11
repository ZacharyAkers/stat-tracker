const express     = require("express");
const passport    = require("passport");
const router      = express.Router();
const mongoose    = require("mongoose");
const Schema      = mongoose.Schema;

mongoose.Promise = require("bluebird");

mongoose.connect("mongodb://localhost:27017/sportsTracker");

const sports = new Schema({
  id: {type: Number},
  activity: {type: String},
  description: {type: String},
  date: {type: Date, default: Date.now},
  count:{type: Number}
});

const sportsStats = mongoose.model("sportsStats", sports);

router.get("/api/sportsStats/", function(req, res, next){
  sportsData.find({}).then(function(tasks){
     res.setHeader('Content-Type', "application/json");
     res.json(tasks);
   })
});

router.post("/api/sportsStats", function (req, res) {
  let sports = new Sports({
    sportsid: req.body.sportsid,
    sports: req.body.sports
  });

  sportsStats.create(sports).then(function (sports) {
    if (sports) {
    res.setHeader("Content-Type", "application/json");
    res.status(201).json(sports);
  }else {
    res.status(403).send("invalid sports")
  }
  })
});

router.get("/api/sportsStats/:id", function (req, res) {
stats.find({statid:req.params.id}).then(function (sports) {
  if (sports) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(sports);
  }else {
    res.status(404).send("no sports")
  }
})
});

router.put("/api/sportsStats/:id", function (req, res) {
  let sport = new sportData({
      id: req.body.id,
      activity: req.body.activity,
      description: req.body.description,
      count:req.body.count
   });
});