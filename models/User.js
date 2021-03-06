const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    lastName: String,
    firstName: String,
    title: String,
    email: String,
    password: String,
    phone: String,
    activated_at: Date,
    accessRole: {
      type: String,
      enum: ["client", "moderator", "admin"]
    },
    image: { type: String, default: "images/no-image.jpg" },
    property: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property"
      }
    ],
    _upvotes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
