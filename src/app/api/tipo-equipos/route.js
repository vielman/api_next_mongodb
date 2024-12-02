import {NextResponse} from 'next/server'
import { connectDB } from '../../../utils/mongoose'
import TipoEquipo from '../../../models/TipoEquipo'

export async function GET() {
    connectDB()
    const tipoEquipos = await TipoEquipo.find()
    return NextResponse.json(tipoEquipos)
}

export async function POST(request) {
    try {
        const data = await request.json()
        const newTipo = new TipoEquipo(data)
        const savedTipo = await newTipo.save()
        return NextResponse.json(savedTipo)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }

    
}