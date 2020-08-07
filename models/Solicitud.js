const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const solicitudSchema = new Schema({
    tipo: {
        type: String,
        enum: ["boda","comunión","bautizo","aniversario luctuoso", "intención"]
    },
    fechaInicio: Date,
    fechaFin: Date,
    nombre: String,
    email: String,
    confirmacion: Boolean, 
  timestamps: {
    createdAt: Boolean,
    updatedAt: Boolean
  }
});

const Solicitudes = mongoose.model('Solicitudes', solicitudSchema);
module.exports = Solicitudes;