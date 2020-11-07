

const argv = require('./config/yars').argv;

const colors=require('colors')


const porHacer=require('./por-hacer/por-hacer')

let comando=argv._[0];

switch (comando) {
    case "crear":
      let tarea=  porHacer.crear(argv.descripcion)
      console.log(tarea)
    break;
    case "listar":
        let listado=porHacer.getListado()

        for (let tarea of listado) {
            console.log("============por hacer========".green)
            console.log(tarea.descripcion)
            console.log('estado',tarea.completado())
            console.log("====================".green)
        }

    break;  
    case "actualizar":
        console.log("actualizar tarea")
        
    break;  

    default:console.log("comando no reconocido")
        break;
}
