import mongoose from 'mongoose'

import {modelTypes} from '../../common/constants'

const {Schema} = mongoose

const FoodItemSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  frequency: {
    type: Number,
    default: 1
  },
  ean: {
    type: String,
    default: null
  },
  unitNetWeightGrams: {
    type: Number,
    default: 0
  },
  kcalPer100Grams: {
    type: Number,
    default: 0,
  },
  registerDate: {
    type: Date,
    default: Date.now
  },
  expireDate: {
    type: Date,
    default: Date.now
  },
  expireTimespanSeconds: {
    type: Number, 
    default: 0
  },
  deleted: {
    type: Boolean,
    default: false
  }
})

const FoodSchema = new Schema({
  category: {
    type: String,
    required: 'Please fill in a category name',
    trim: true
  },
  items: [FoodItemSchema],
  deleted: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model(modelTypes.FOOD, FoodSchema)
export const FoodItem = mongoose.model(modelTypes.FOOD_ITEM, FoodItemSchema)