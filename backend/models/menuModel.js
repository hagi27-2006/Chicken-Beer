// models/MenuItem.js
import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: String,
    required: true,
  },
  image: String,
});

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
export default MenuItem;
