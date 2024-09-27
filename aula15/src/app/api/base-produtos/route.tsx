import { NextResponse } from "next/server";

//CRIAR AQUI NESTE LOCAL OU TRAZER PARA CÁ A LISTA DE
//PRODUTOS E APRESENTAR ELA NO RETORNO DA API...


export async function GET() {
    return NextResponse.json({ mensagem: "Hello World!" });
}
