import nc from "next-connect";
import dbConnect from "../../../backend/config/dbConnect";
import {
  allRooms,
  newRoom,
} from "../../../backend/controllers/roomControllers";

const handler = nc();

dbConnect();

handler.get(allRooms);
handler.post(newRoom);

export default handler;
