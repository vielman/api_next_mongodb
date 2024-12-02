import {Schema, model, models} from 'mongoose'

const TipoEquipoSchema = new Schema({
    nombre: {
        type:String,
        require: [true, 'El nombre es requerido'],
        trim:true,
    }
}, {
    timestamps: true
})

export default models.TipoEquipo || model('TipoEquipo', TipoEquipoSchema)

