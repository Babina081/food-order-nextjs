const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviewNum: {
    type: Number,
    default: 0,
  },
  locationUrl: {
    type: String,
  },
  orderLimit: {
    type: Number,
    default: 0,
  },
  image: { type: String, default: "" },
  images: [{ type: String }],
  isAvailable: {
    type: Boolean,
    default: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MenuItemLists",
      required: true,
    },
  ],
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    // required: true,
  },
  service: [
    {
      type: String,
      required: true,
    },
  ],

  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

restaurantSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

restaurantSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
// exports.restaurantSchema = restaurantSchema;
