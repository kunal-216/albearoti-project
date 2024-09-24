import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
    dueDate: { type: Date, required: false }
}, { timestamps: true });

const taskModel = mongoose.model("task", taskSchema);
export default taskModel;
