import {NextResponse} from 'next/server'

export function GET(request, { params }) {
    return NextResponse.json({
        message: `Obtener tipo equipo ${params.id}`
    })
}

export function PUT(request, { params }) {
    return NextResponse.json({
        message: `Actualizar tipo equipo ${params.id}`
    })
}

export function DELETE(request, { params }) {
    return NextResponse.json({
        message: `eliminartipo equipo ${params.id}`
    })
}