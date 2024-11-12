import { Types } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type useRole = "admin" | "user";

export type TUser = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: useRole;
};
export type TUserRole = keyof typeof USER_ROLE;
