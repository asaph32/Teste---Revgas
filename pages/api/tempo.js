async function tempo(request,response) {
    const dynamicDate = new Date();

    const databaseResponse = await fetch("https://teste-revgas.vercel.app/api/tempo");
    const databaseResponseJson = await databaseResponse.json();
    const banco = databaseResponseJson

    response.json({
        date : dynamicDate.toGMTString(),
        banco : banco
    })
}

export default tempo;

    


