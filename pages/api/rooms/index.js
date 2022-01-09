import nc from "next-connect";
import dbConnect from "../../../backend/config/dbConnect";
import { allRooms } from "../../../backend/controllers/roomControllers";

const handler = nc();

dbConnect();

handler.get(allRooms);

export default handler;
