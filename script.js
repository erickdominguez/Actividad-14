const comprarCasco = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Casco comprado");
        },1000)    
    })
}

const comprarGuantes = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Guantes Comprados");
        },2000)    
    })
}

const irDePaseo = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ir en bici");
        },8000)    
    })
}

const prepararPaseo=async()=>{
    const casco= await comprarCasco();
    const guantes = await comprarGuantes();
    const paseo = await irDePaseo();
    return [casco,guantes,paseo]
}

prepararPaseo()
    .then(informacion=>{
        console.log(informacion);
    })
