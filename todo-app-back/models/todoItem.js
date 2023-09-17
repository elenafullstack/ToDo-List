const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

console.log("connecting to", url);
mongoose
  .connect(url)
  .then(console.log("connected to MongoDB"))
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });


const todoItemSchema = new mongoose.Schema({
  title: String,
  deadline: Date,
  status: String,
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: false 
  // }
});



todoItemSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("TodoItem", todoItemSchema);
