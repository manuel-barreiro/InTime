import mongoose, { Schema } from "mongoose"

const orderSchema = new Schema (
    {
      id: Number,
      date_created: Date,
      items: Object,
      total: Number,
      status: String,
      status_detail: String,
      payment_method_type: String,
      payment_method_id: String,
      nombre: String,
      whatsapp: Number,
      email: String
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema)

export default Order