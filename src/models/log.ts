import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  params: {
    type: Object,
    required: true,
  },
  req_time: {
    type: Number,
    required: true,
  },
  res_time: {
    type: Number,
    required: true,
  },
  extra: {
    type: Object,
    required: true,
  },
}, {
  timestamps: {
    createdAt: true,
  }
})

const Log = mongoose.model('Log', logSchema)

export default Log;