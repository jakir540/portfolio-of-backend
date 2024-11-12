import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import { USER_ROLE } from "./user.constant";

const UserSchema = new Schema<TUser>(
  {
    // No need to explicitly define `_id` here; Mongoose adds it automatically as an ObjectId
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    role: {
      type: String,
      enum: Object.values(USER_ROLE), // This references USER_ROLE values
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Exporting model based on TUser
export const User = model<TUser>("User", UserSchema);
