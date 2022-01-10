import Room from "../models/room";

// Create new room ==> GET /api/rooms
const allRooms = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Rooms",
  });
};

// Create new room ==> POST /api/rooms
const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { allRooms, newRoom };
