import {Schema, model, models} from 'mongoose'

const TipoEquipoSchema = new Schema({
    nombre: {
        type:String,
        require: [true, 'El nombre es requerido'],
        trim:true,
    },
    fechaactivacion: {
        type:Date,
        require: [true, 'la fecha es requerida'],
        trim:true,
    },
    fechadesactivacion: {
        type:Date,
    },
    username: {
        type:String,
        require: [true, 'El usuario es requerido'],
        trim:true,
    },
}, {
    timestamps: true
})

export default models.TipoEquipo || model('TipoEquipo', TipoEquipoSchema)

