const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Room name is required"],
      trim: true,
      maxlength: [100, "Room name cannot exceed 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Room price is required"],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, "Please enter room description"],
    },
    address: {
      type: String,
      required: [true, "Please enter address"],
    },
    guestCapacity: {
      type: Number,
      required: [true, "Please enter guest capacity"],
    },
    numOfBeds: {
      type: Number,
      required: [true, "Please enter number of beds"],
    },
    services: [
      {
        type: String,
        enum: [
          "internet",
          "breakfast",
          "airConditioned",
          "petsAllowed",
          "roomCleaning",
        ],
      },
    ],
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please enter room category"],
      enum: {
        values: ["King", "Single", "Twins"],
        message: "Please select correct category for room",
      },
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Room || mongoose.model("Room", roomSchema);
