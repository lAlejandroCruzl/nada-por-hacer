const fs=require('fs')


let listadoPorHacer=[]

const guardarDb=()=>{

    let data= JSON.stringify(listadoPorHacer)

    fs.writeFile(`db/data.Json`,data,(err)=>{

        if (err) throw new Error("Nosse pudo guardar",err)
    })

}


    const cargarDB =()=>{
        try {
            listadoPorHacer=require('../db/data.json')
        } catch (error) {
            listadoPorHacer=[]
        }
        
    }
    const crear= (descripcion)=>{
        
         cargarDB()
        let porHacer={
            descripcion,
            completado:false

        }

        listadoPorHacer.push(porHacer)
        guardarDb()
        return porHacer
    } 
    const getListado=()=>{
        cargarDB
        return listadoPorHacer
    }

    module.exports={
        crear,
        getListado
    }