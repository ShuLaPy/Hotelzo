import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middlewares/catchAsyncError";

// Create new room ==> GET /api/rooms
const allRooms = catchAsyncError(async (req, res) => {
  const rooms = await Room.find({});
  res.status(200).json({
    success: true,
    rooms,
  });
});

// Create new room ==> POST /api/rooms
const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

// Get single room by id - GET /api/rooms/:id
const getRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// Update single room by id - PUT /api/rooms/:id
const updateRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    return res.status(404).json({
      success: false,
      error: "Room not found",
    });
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// Delete single room by id - DELETE /api/rooms/:id
const deleteRoom = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return res.status(404).json({
      success: false,
      error: "Room not found",
    });
  }

  room.remove();

  res.status(200).json({
    success: true,
    message: "Room deleted successfully",
  });
});

export { allRooms, newRoom, getRoom, updateRoom, deleteRoom };
