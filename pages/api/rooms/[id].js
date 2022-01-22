import nc from "next-connect";
import dbConnect from "../../../backend/config/dbConnect";
import {
  deleteRoom,
  getRoom,
  updateRoom,
} from "../../../backend/controllers/roomControllers";
import onError from "../../../backend/middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.get(getRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
