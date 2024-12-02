import {NextResponse} from 'next/server'
import { connectDB } from '../../../../utils/mongoose'
import TipoEquipo from '../../../../models/TipoEquipo'

export async function GET(request, { params }) {
    try {
        connectDB()
        const {id} = await params;
        const tipoEquipo = await TipoEquipo.findById(id)
        if (!tipoEquipo) return NextResponse.json({
            message: "Tipo de Equipo no encontrado"
            },
            {
            status: 404
            }
        )

        return NextResponse.json(tipoEquipo);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    } 
}

export async function PUT(request, { params }) {
    try {
        const data = await request.json()
        const {id} = await params;
        const tipeEquipoUpdate = await TipoEquipo.findByIdAndUpdate(id, data, {
            new: true
        })
        return NextResponse.json(tipeEquipoUpdate);
        
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

export async function DELETE(request, { params }) {
    try {
        const {id} = await params;
        const tipoEquipoDelete = await TipoEquipo.findByIdAndDelete(id)

        if (!tipoEquipoDelete) 
            return NextResponse.json({
                message: "Tipo de Equipo no encontrado"
            }, {
            status: 404
            }
        )

        return NextResponse.json(tipoEquipoDelete)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

    
}