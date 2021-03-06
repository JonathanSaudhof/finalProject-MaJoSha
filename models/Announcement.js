const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const announcementSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: String,
    type: {
      type: String
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    visibility: {
      type: Boolean,
      default: true
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property"
    },
    image: {
      type: String,
      default: "https://source.unsplash.com/random"
    },

    announcedAt: {
      type: Date,
      default: Date.now
    },

    unannouncedAt: {
      type: Date,
      default: Date.now
    }
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Announcement = mongoose.model("Announcement", announcementSchema);
module.exports = Announcement;
