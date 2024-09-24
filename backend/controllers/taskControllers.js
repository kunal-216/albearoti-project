import taskModel from "../models/taskModel.js";

const getTask = async (req, res) => {
    const userId = req.user.id;
    try {
        const tasks = await taskModel.find({ userId });
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const postTask = async (req, res) => {
    const { title, description, status, dueDate } = req.body;
    const userId = req.user.id; 

    try {
        const newTask = new taskModel({ userId, title, description, status, dueDate });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateTask = async (req, res) => {
    const { id } = req.params; 
    const userId = req.user.id; 

    try {
        const updatedTask = await taskModel.findOneAndUpdate(
            { _id:id, userId },
            req.body,
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params; 
    const userId = req.user.id; 

    console.log(id)
    console.log(userId)

    try {
        const deletedTask = await taskModel.findOneAndDelete({ _id: id, userId });

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { getTask, postTask, updateTask, deleteTask };