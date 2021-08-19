import { Schema, model, Document } from "mongoose";

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

interface ITask extends Document {
  title: string;
  description: string;
}

export const Task = model<ITask>("Note", TaskSchema);
