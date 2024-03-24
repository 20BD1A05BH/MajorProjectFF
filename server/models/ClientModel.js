import express from 'express'
import mongoose from 'mongoose'

//This "models" folder is mongodb schemas (See in cluster0 -> Browse Collections)

const ClientSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    userId: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const ClientModel = mongoose.model('ClientModel', ClientSchema)
export default ClientModel