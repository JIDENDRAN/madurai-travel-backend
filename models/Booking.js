import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  fromLocation: { type: String, required: true },
  toLocation: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: false },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  vehicle: { type: String, required: false, default: 'Not Selected' },
  packageType: { type: String, required: false, default: 'Custom Trip' },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);
