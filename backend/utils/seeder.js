const mongoose = require("mongoose");
const Room = require("../models/room");
const dbConnect = require("../config/dbConnect.js");
const rooms = require("../data/rooms.json");

dbConnect();

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    await Room.insertMany(rooms);
    console.log("All rooms are inserted");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
