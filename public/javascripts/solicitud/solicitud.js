    function meses(){
            document.getElementById('btnmes').style.display="none"
            document.getElementById('btnGroupDropmes').style.display="inline"
        }
    function obmes(){
            var combo= document.getElementById('btnGroupDropmes')
            var selected = combo.options[combo.selectedIndex].text;
    }
    function años(){
        document.getElementById('btnaño').style.display="none"
        document.getElementById('btnGroupDroAño').style.display="inline"
    }
    function obaño(){
            var combo1= document.getElementById('btnGroupDroAño')
            var selectedaño = combo1.options[combo1.selectedIndex].text;     
    }
  function atrasmes(){
            var Combo= (document.getElementById('btnGroupDropmes').selectedIndex)-1
            document.getElementById('btnGroupDropmes').selectedIndex = Combo; 
            obmes()
  }
  function adelmes(){
            var Comb= (document.getElementById('btnGroupDropmes').selectedIndex)+1
            document.getElementById('btnGroupDropmes').selectedIndex = Comb;
            obmes()
  }
  function atrasaño(){
            var Comboa= (document.getElementById('btnGroupDroAño').selectedIndex)-1
            document.getElementById('btnGroupDroAño').selectedIndex = Comboa; 
            obaño()
  }
  function adelaño(){
            var Comba= (document.getElementById('btnGroupDroAño').selectedIndex)+1
            document.getElementById('btnGroupDroAño').selectedIndex = Comba; 
            obaño()
  }

function damesem(){
    var m= document.getElementById('btnGroupDropmes')
    var messel=m.options[m.selectedIndex].text
    var a= document.getElementById('btnGroupDroAño')
    var añosel=a.options[a.selectedIndex].text
            let calendario={
                ye2020:{
                    Enero:{id: 1,nombre: "Enero",duracion:31,inicio: "Miércoles",fin: "Viernes"},
                    Febrero:{id: 2,nombre: "Febrero",duracion:29,inicio: "Sábado",fin: "Sábado"},
                    Marzo:{id: 3,nombre: "Marzo",duracion:31,inicio: "Domingo",fin: "Martes"},
                    Abril:{id: 4,nombre: "Abril",duracion:30,inicio: "Miércoles",fin: "Jueves"},
                    Mayo:{id: 5,nombre: "Mayo",duracion:31,inicio: "Viernes",fin: "Domingo"},
                    Junio:{id: 6,nombre: "Junio",duracion:30,inicio: "Lunes",fin: "Martes"},
                    Julio:{id: 7,nombre: "Julio",duracion:31,inicio: "Miércoles",fin: "Viernes"},
                    Agosto:{id: 8,nombre: "Agosto",duracion:31,inicio: "Sábado",fin: "Lunes"},
                    Septiembre:{id: 9,nombre: "Septiembre",duracion:30,inicio: "Martes",fin: "Miércoles"},
                    Octubre:{id:10 ,nombre: "Octubre",duracion:31,inicio: "Jueves",fin: "Sábado"},
                    Noviembre:{id:11 ,nombre: "Noviembre",duracion:30,inicio:"Domingo" ,fin: "Lunes"},
                    Diciembre:{id: 12,nombre: "Diciembre",duracion:31,inicio: "Martes",fin: "Jueves"}
                },
                 Bisiesto:{
                    Enero:{id: 1,nombre: "Enero",duracion:31},
                    Febrero:{id: 2,nombre: "Febrero",duracion:29},
                    Marzo:{id: 3,nombre: "Marzo",duracion:31},
                    Abril:{id: 4,nombre: "Abril",duracion:30},
                    Mayo:{id: 5,nombre: "Mayo",duracion:31},
                    Junio:{id: 6,nombre: "Junio",duracion:30},
                    Julio:{id: 7,nombre: "Julio",duracion:31},
                    Agosto:{id: 8,nombre: "Agosto",duracion:31},
                    Septiembre:{id: 9,nombre: "Septiembre",duracion:30},
                    Octubre:{id:10 ,nombre: "Octubre",duracion:31},
                    Noviembre:{id:11 ,nombre: "Noviembre", duracion:30},
                    Diciembre:{id: 12,nombre: "Diciembre", duracion:31}
                }, 
                NoBisiesto:{
                    Enero:{id: 1,nombre: "Enero",duracion:31},
                    Febrero:{id: 2,nombre: "Febrero",duracion:29},
                    Marzo:{id: 3,nombre: "Marzo",duracion:31},
                    Abril:{id: 4,nombre: "Abril",duracion:30},
                    Mayo:{id: 5,nombre: "Mayo",duracion:31},
                    Junio:{id: 6,nombre: "Junio",duracion:30},
                    Julio:{id: 7,nombre: "Julio",duracion:31},
                    Agosto:{id: 8,nombre: "Agosto",duracion:31},
                    Septiembre:{id: 9,nombre: "Septiembre",duracion:30},
                    Octubre:{id:10 ,nombre: "Octubre",duracion:31},
                    Noviembre:{id:11 ,nombre: "Noviembre", duracion:30},
                    Diciembre:{id: 12,nombre: "Diciembre", duracion:31}
                }
            }
if(messel!="Seleccione mes" && añosel!="Seleccione año"){
            console.log(messel+","+añosel)
   if (añosel%4==0){
        if(añosel%100==0){
            if(añosel%400==0){ 
                console.log(añosel+" "+ "Es un año bisiesto") 
            }else{
                console.log(añosel+" "+ "No es un año bisiesto")  
            } 
            } else{
            console.log(añosel+" "+ "Es un año bisiesto")  
            }  
        }else{
            console.log(añosel+" "+ "No es un año bisiesto")  
        }
if (añosel=="2020"){
//comentado1
    // {{!-- let op= console.log(calendario.ye2020)
    // let miObjet = Object.keys(calendario)[0] //para llaves de calendario
    // console.log(miObjet)
    // let r = Object.keys(calendario.ye2020)//para llaves de ye2020
    // console.log(r)
    // console.log(r[0])
    // let r1 = Object.keys(calendario.Bisiesto.Abril)
    // console.log(r1)
    // console.log(r1[0]) --}}
//comentado1
    let mes;
    let w=Object.keys(calendario.ye2020)
    w.forEach((element,i) => {
        if(messel==element){
            let s11= [i,calendario.ye2020[element]]
            mes=s11[1]
            console.log (s11)
            // {{!-- console.log (s11[0])
            // console.log (s11[1]) --}}
        }
    })
let dias=[]
    for(i=1;i<=mes.duracion;i++){
        dias.push({dia: i})
    }
    console.log(mes)
    console.log(dias)
}//if 2020
}else{
    console.log("Te falta :V")
}


}
           