const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    email: {
        type: String,
    }
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      default: "",
    },
    weight: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    stepGoal: {
      type: Number,
      default: 0,
    },
    calGoal: {
      type: Number,
      default: 0,
    },
    weightGoal: {
      type: Number,
      default: 0,
    },
    condition: {
      type: String,
      default: false,
    },
    veg: {
      type: Boolean,
      default: false,
    },
    vegan: {
      type: Boolean,
      default: false,
    },
    points: {
      type: Number,
      default: 0,
    },
    friend: {
    type: Array,
    default: [],
    },
      competition: [competitionSchema]
    },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);