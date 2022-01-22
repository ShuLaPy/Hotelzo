import nc from "next-connect";
import dbConnect from "../../../backend/config/dbConnect";
import {
  allRooms,
  newRoom,
} from "../../../backend/controllers/roomControllers";
import onError from "../../../backend/middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.get(allRooms);
handler.post(newRoom);

export default handler;
