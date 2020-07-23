const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const eventoSchema = new Schema({
    tipo: {
        type: String,
        enum: ["boda","comunión","bautizo","aniversario luctuoso", "intención"]
    },
    fechaInicio: Date,
    fechaFin: Date,
    diasrepite: {
        type: String,
        enum: ["Lunes","Martes","Miércoles","Jueves", "Viernes","Sábado","Domingo","No"],
        default: "No"
    },
    participantes: Array[String],
    timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Evento = mongoose.model('Evento', eventoSchema);
module.exports = Evento;