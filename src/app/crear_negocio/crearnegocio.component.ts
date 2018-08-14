import { Component } from '@angular/core';
import { LugaresServicio } from '../services/lugares.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crearnegocio',
  templateUrl: './crearnegocio.component.html',
  
})
export class CrearNegocioComponent{
talleres:any=[];
lugar:any=[];
id:any=null;
  constructor(private lugarservicio:LugaresServicio, private rout:ActivatedRoute){
    console.log(this.rout.snapshot.params['id']);//esto es una forma de revisar los paraemtros
    this.id=this.rout.snapshot.params['id'];
    if(this.id!="new"){
      this.lugarservicio.getLugar(this.id)
      .valueChanges().subscribe((lugar)=>{
        this.lugar=lugar;
      });
    
  }
}

  guardarLugar(){
      
      var direccion = this.lugar.calle+","+this.lugar.ciudad+","+this.lugar.pais;
      this.lugarservicio.obtenerGeoData(direccion).subscribe((result)=>{
        //debugger;
        this.lugar.lat=result.json().results[0].geometry.location.lat;
        this.lugar.lng=result.json().results[0].geometry.location.lng;
        
      if(this.id!="new"){
        debugger;
        this.lugarservicio.actualizarLugar(this.lugar);
        alert("Negocio editado con éxito");
      }else{
        this.lugar.id=Date.now();
        this.lugarservicio.guardarLugar(this.lugar);
        alert("Negocio guardado con éxito");
      }
        this.lugar={};  
      }); 
      
  }

guardarTalleres(){
this.talleres=[
  {
    "id": 223,
    "nombre": "COMERCIAL DUMAY S.A",
    "lat": -33.372719,
    "lng": -70.651771,
    "rut": "77430900",
    "local": "/2/",
    "direccion": "EL CONQUISTADOR DEL MONTE\tS",
    "activo": "S"
  },
  {
    "id": 224,
    "nombre": "LARRAIN Y VALDES LTDA.",
    "lat": -33.46854,
    "lng": -70.62722,
    "rut": "80537300",
    "local": "/1/",
    "direccion": "SANTA ELENA 1888",
    "activo": "S"
  },
  {
    "id": 232,
    "nombre": "Global Autos",
    "lat": -33.465725,
    "lng": -70.569695,
    "rut": "96965900",
    "local": "/1/",
    "direccion": "Fresia 1223, Peñalolén",
    "activo": "S"
  },
  {
    "id": 266,
    "nombre": "AUTOMOTRICES ALTAGAMA LIMITADA",
    "lat": -33.478921,
    "lng": -70.620659,
    "rut": "76825845",
    "local": "/1/",
    "direccion": "JOSÉ ANANÍAS 80, MACUL",
    "activo": "S"
  },
  {
    "id": 1006,
    "nombre": "AUTOMOTRIZ LA PARVA",
    "lat": -33.483058,
    "lng": -70.641246,
    "rut": "76406210",
    "local": "/1/",
    "direccion": "AVENIDA SANTA ROSA 2980    SAN",
    "activo": "S"
  },
  {
    "id": 1007,
    "nombre": "MEDITERRANEO",
    "lat": -33.451741,
    "lng": -70.635772,
    "rut": "96889440",
    "local": "/12/",
    "direccion": "10 DE JULIO 340, SAN",
    "activo": "S"
  },
  {
    "id": 1009,
    "nombre": "MEDITERRANEO",
    "lat": -33.471876,
    "lng": -70.630224,
    "rut": "96889440",
    "local": "/4/",
    "direccion": "FRANKLIN 318 SANTIAGO, SAN",
    "activo": "S"
  },
  {
    "id": 1010,
    "nombre": "AVENTURA MOTORS",
    "lat": -33.369933,
    "lng": -70.6646139,
    "rut": "76031939",
    "local": "/2/",
    "direccion": "SANTA ELENA 1120 HUECHURAB SAN",
    "activo": "S"
  },
  {
    "id": 1011,
    "nombre": "BRUNO FRITSCH SA",
    "lat": -33.550593,
    "lng": -70.7157853,
    "rut": "84807200",
    "local": "/13/",
    "direccion": "AVDA CHENA 10920, SAN BERNARDO",
    "activo": "S"
  },
  {
    "id": 1012,
    "nombre": "Servicio Automotriz Felipe Milnes",
    "lat": -33.4661035,
    "lng": -70.7157853,
    "rut": "78571020",
    "local": "/657/",
    "direccion": "DIEZ DE JULIO",
    "activo": "S"
  },
  {
    "id": 13,
    "nombre": "INALCO SUR DIST RIBUIDOR AUTOMO",
    "lat": -33.479007,
    "lng": -70.621026,
    "rut": "96527870",
    "local": "/2/",
    "direccion": "JOSE ANANIAS 80",
    "activo": "S"
  },
  {
    "id": 14,
    "nombre": "E. KOVACS Y COMPANIA LIMITADA",
    "lat": -33.372252,
    "lng": -70.649707,
    "rut": "80522900",
    "local": "/8/",
    "direccion": "EL ROSAL 4967",
    "activo": "S"
  },
  {
    "id": 15,
    "nombre": "COMERCIAL DUMAY S.A",
    "lat": -33.369558,
    "lng": -70.650699,
    "rut": "77430900",
    "local": "/1/",
    "direccion": "CAMINO PUNTA MOCHA 1396",
    "activo": "S"
  },
  {
    "id": 100,
    "nombre": "VERGARA GODOY CARLOS Y OTRA",
    "lat": -33.42382,
    "lng": -70.69694,
    "rut": "53309476",
    "local": "/1/",
    "direccion": "HOEVEL 4534SAN",
    "activo": "S"
  },
  {
    "id": 101,
    "nombre": "LIRA LARRAIN Y CIA.LTDA. ",
    "lat": -33.551228,
    "lng": -70.714261,
    "rut": "82293400",
    "local": "/4/",
    "direccion": "AVDA.CHENA 10970 SAN",
    "activo": "S"
  },
  {
    "id": 102,
    "nombre": "AUTOM.COM.COSTABAL Y ECHENIQUE",
    "lat": -33.454379,
    "lng": -70.65605,
    "rut": "91139000",
    "local": "/6/",
    "direccion": "10 DE JULIO 1543 SAN",
    "activo": "S"
  },
  {
    "id": 103,
    "nombre": "AUTOMOTRIZ CORDILLERA S.A. ",
    "lat": -33.457314,
    "lng": -70.544876,
    "rut": "79853470",
    "local": "/13/",
    "direccion": "LOS CANTEROS 8500SAN",
    "activo": "S"
  },
  {
    "id": 104,
    "nombre": "AUTOM.COM.COSTABAL Y ECHENIQUE",
    "lat": -33.450688,
    "lng": -70.542673,
    "rut": "91139000",
    "local": "/14/",
    "direccion": "AV.LARRAIN 5862 LOCAL 1020 SAN",
    "activo": "S"
  },
  {
    "id": 105,
    "nombre": "AUTOMOTRIZ CORDILLERA S.A. ",
    "lat": -33.485456,
    "lng": -70.69783,
    "rut": "79853470",
    "local": "/17/",
    "direccion": "PEDRO AGUIRE CERDA 5037 BSAN",
    "activo": "S"
  },
  {
    "id": 106,
    "nombre": "LIRA LARRAIN Y CIA.LTDA. ",
    "lat": -33.448558,
    "lng": -70.627971,
    "rut": "82293400",
    "local": "/98/",
    "direccion": "SEMINARIO 586-594SAN",
    "activo": "S"
  },
  {
    "id": 107,
    "nombre": "FORNES FORNES CRISTIAN ROBERTO",
    "lat": -33.488668,
    "lng": -70.59791,
    "rut": "12486533",
    "local": "/1/",
    "direccion": "ARMANDO MOOCK 3758 SAN",
    "activo": "S"
  },
  {
    "id": 108,
    "nombre": "IMPORTADORA MAVER LTDA ",
    "lat": -33.376295,
    "lng": -70.763144,
    "rut": "76153829",
    "local": "/1/",
    "direccion": "PARINACOTA #231, QUILICURA SAN",
    "activo": "S"
  },
  {
    "id": 109,
    "nombre": "EUROPARTS",
    "lat": -33.377979,
    "lng": -70.52869,
    "rut": "93435000",
    "local": "/5/",
    "direccion": "AV. LAS CONDES 11150 SAN ",
    "activo": "S"
  },
  {
    "id": 110,
    "nombre": "EUROPARTS",
    "lat": -33.403838,
    "lng": -70.586828,
    "rut": "93435000",
    "local": "/6/",
    "direccion": "ALONSO DE CORDOVA 4382 SAN",
    "activo": "S"
  },
  {
    "id": 111,
    "nombre": "EUROPARTS",
    "lat": -33.42965,
    "lng": -70.62669,
    "rut": "93435000",
    "local": "/98/",
    "direccion": "BELLAVISTA 0790 SAN",
    "activo": "S"
  },
  {
    "id": 112,
    "nombre": "CURIFOR S.A. ",
    "lat": -33.453244,
    "lng": -70.626734,
    "rut": "92909000",
    "local": "/6/",
    "direccion": "SEMINARIO 886SAN",
    "activo": "S"
  },
  {
    "id": 113,
    "nombre": "DERCO CENTER S.A.",
    "lat": -33.56983,
    "lng": -70.55668,
    "rut": "82995700",
    "local": "/7/",
    "direccion": "AV.C.HENRIQUEZ 3296-P.TOBALSAN",
    "activo": "S"
  },
  {
    "id": 115,
    "nombre": "DERCO CENTER S.A.",
    "lat": -33.40009,
    "lng": -70.55372,
    "rut": "82995700",
    "local": "/11/",
    "direccion": "AV. LAS CONDES 7820SAN",
    "activo": "S"
  },
  {
    "id": 116,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.394142,
    "lng": -70.57746,
    "rut": "78976140",
    "local": "/2/",
    "direccion": "VITACURA 5555 VITACURA SAN",
    "activo": "S"
  },
  {
    "id": 117,
    "nombre": "Portillo Piramide",
    "lat": -33.36622,
    "lng": -70.678529,
    "rut": "79921560",
    "local": "/3/",
    "direccion": "AVDA A.VESPUCIO 1737 L.103 SAN",
    "activo": "S"
  },
  {
    "id": 119,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.361499,
    "lng": -70.72112,
    "rut": "78976140",
    "local": "/3/",
    "direccion": "AV. LA TORRES 1384 SAN",
    "activo": "S"
  },
  {
    "id": 120,
    "nombre": "Portillo Piramide",
    "lat": -33.372381,
    "lng": -70.665116,
    "rut": "79921560",
    "local": "/4/",
    "direccion": "AVDA. A VESPUCIO 1155 L.617SAN",
    "activo": "S"
  },
  {
    "id": 121,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.431497,
    "lng": -70.576496,
    "rut": "78976140",
    "local": "/4/",
    "direccion": "AV. FRANCISCO BILBAO 5529SAN",
    "activo": "S"
  },
  {
    "id": 122,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.396125,
    "lng": -70.572029,
    "rut": "78976140",
    "local": "/5/",
    "direccion": "MANQUEHUE NORTE 1180 SAN",
    "activo": "S"
  },
  {
    "id": 123,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.452274,
    "lng": -70.627722,
    "rut": "78976140",
    "local": "/6/",
    "direccion": "IRARRAZAVAL 280SAN",
    "activo": "S"
  },
  {
    "id": 124,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.35526,
    "lng": -70.534173,
    "rut": "78976140",
    "local": "/7/",
    "direccion": "JOSE ALCADE DELANO 11021 SAN",
    "activo": "S"
  },
  {
    "id": 125,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.372442,
    "lng": -70.651687,
    "rut": "78976140",
    "local": "/8/",
    "direccion": "EL CONQUIST.DEL MONTE 4831 SAN",
    "activo": "S"
  },
  {
    "id": 126,
    "nombre": "WILLIAMSON BALFOUR MOTORS DIST",
    "lat": -33.328578,
    "lng": -70.514241,
    "rut": "76738110",
    "local": "/1/",
    "direccion": "BASEL 45228NNN",
    "activo": "S"
  },
  {
    "id": 127,
    "nombre": "WILLIAMSON BALFOUR MOTORS S. A",
    "lat": -33.363438,
    "lng": -70.514598,
    "rut": "96695420",
    "local": "/1/",
    "direccion": "AV. LA DEHESA 265 SAN",
    "activo": "S"
  },
  {
    "id": 128,
    "nombre": "WILLIAMSON BALFOUR MOTORS DIST",
    "lat": -33.371182,
    "lng": -70.512964,
    "rut": "76738110",
    "local": "/2/",
    "direccion": "AVENIDA LAS CONDES 12907 SAN",
    "activo": "S"
  },
  {
    "id": 129,
    "nombre": "WILLIAMSON BALFOUR MOTORS DIST",
    "lat": -33.404758,
    "lng": -70.643308,
    "rut": "76738110",
    "local": "/3/",
    "direccion": "AVENIDA EL ROBLE 610 SAN",
    "activo": "S"
  },
  {
    "id": 130,
    "nombre": "COMERC. DITEC AUTOMOVILES S.A.",
    "lat": -33.316042,
    "lng": -70.735788,
    "rut": "96899100",
    "local": "/4/",
    "direccion": "EL ARROYO 995SAN",
    "activo": "S"
  },
  {
    "id": 131,
    "nombre": "AUTOMOTRIZ SANTA CATALINA LTDA",
    "lat": -33.45744,
    "lng": -70.62924,
    "rut": "76469100",
    "local": "/1/",
    "direccion": "VICUÑA MACKENNA 1236 SAN",
    "activo": "S"
  },
  {
    "id": 132,
    "nombre": "AUTOMOVILES CHAMY HNOS. Y CIA.",
    "lat": -33.45521,
    "lng": -70.60998,
    "rut": "79954770",
    "local": "/1/",
    "direccion": "DUBLE ALMEYDA 2031 SAN",
    "activo": "S"
  },
  {
    "id": 133,
    "nombre": "ALLOY WHEEL REPAIR (AWRS CHILE",
    "lat": -33.286184,
    "lng": -70.673975,
    "rut": "76455348",
    "local": "/2/",
    "direccion": "AV. CHICUREO KM 2,8 LOC 1- SAN",
    "activo": "S"
  },
  {
    "id": 134,
    "nombre": "AUTOACTION CORPS.A.",
    "lat": -33.385901,
    "lng": -70.562694,
    "rut": "76031939",
    "local": "/1/",
    "direccion": "AVENIDA VITACURA 7400SAN",
    "activo": "S"
  },
  {
    "id": 135,
    "nombre": "AUTOM.COM.COSTABAL Y ECHENIQUE",
    "lat": -33.48434,
    "lng": -70.62028,
    "rut": "91139000",
    "local": "/1/",
    "direccion": "AV. VICUNA MACKENNA 3500 SAN",
    "activo": "S"
  },
  {
    "id": 136,
    "nombre": "AUTOMOTRIZ LAS CONDES BYB LTDA",
    "lat": -33.39965,
    "lng": -70.55293,
    "rut": "77372730",
    "local": "/1/",
    "direccion": "AVENIDA LAS CONDES 7990SAN",
    "activo": "S"
  },
  {
    "id": 137,
    "nombre": "AUTOMOTRIZ RUTA NORTE LTDA.",
    "lat": -33.37015,
    "lng": -70.70578,
    "rut": "76918320",
    "local": "/1/",
    "direccion": "AMÉRICO VESPUCIO 1845SAN",
    "activo": "S"
  },
  {
    "id": 138,
    "nombre": "COMERCIAL LAS CONDES S.A.",
    "lat": -33.41688,
    "lng": -70.598547,
    "rut": "76058296",
    "local": "/1/",
    "direccion": "CARMENCITA 25 OF. 2SAN",
    "activo": "S"
  },
  {
    "id": 139,
    "nombre": "DIFOR CHILE S.A. ",
    "lat": -33.394735,
    "lng": -70.547402,
    "rut": "96918300",
    "local": "/1/",
    "direccion": "AV. LAS CONDES 8744 00 SAN ",
    "activo": "S"
  },
  {
    "id": 140,
    "nombre": "LARRAIN SIERRA Y CIA. LTDA.",
    "lat": -33.44857,
    "lng": -70.62796,
    "rut": "82293400",
    "local": "/1/",
    "direccion": "SEMINARIO 592SAN",
    "activo": "S"
  },
  {
    "id": 141,
    "nombre": "AUTOACTION CORP S.A. ",
    "lat": -33.369545,
    "lng": -70.662918,
    "rut": "76031939",
    "local": "/2/3/",
    "direccion": "SANTA ELENA 1120 HUECHURAB SAN",
    "activo": "S"
  },
  {
    "id": 142,
    "nombre": "AUTOM.COM.COSTABAL Y ECHENIQUE",
    "lat": -33.38765,
    "lng": -70.56534,
    "rut": "91139000",
    "local": "/2/",
    "direccion": "AV. VITACURA 6937SAN",
    "activo": "S"
  },
  {
    "id": 143,
    "nombre": "LIRA LARRAIN Y CIA.LTDA. ",
    "lat": -33.3460365,
    "lng": -70.7130318,
    "rut": "82293400",
    "local": "/2/",
    "direccion": "LAS ARAUCARIAS 2841SAN",
    "activo": "S"
  },
  {
    "id": 145,
    "nombre": "AUTOM.COM.COSTABAL Y ECHENIQUE",
    "lat": -33.35336,
    "lng": -70.51828,
    "rut": "91139000",
    "local": "/3/",
    "direccion": "AV. LA DEHESA 1961 SAN",
    "activo": "S"
  },
  {
    "id": 146,
    "nombre": "LIRA LARRAIN Y CIA.LTDA. ",
    "lat": -70.7152502,
    "lng": -33.3461704,
    "rut": "82293400",
    "local": "/3/",
    "direccion": "SEMINARIO 592SAN",
    "activo": "S"
  },
  {
    "id": 147,
    "nombre": "DIFOR CHILE S.A. ",
    "lat": -33.372585,
    "lng": -70.732582,
    "rut": "96918300",
    "local": "/4/",
    "direccion": "AV. AMERICO VESPUCIO 1397 SAN",
    "activo": "S"
  },
  {
    "id": 148,
    "nombre": "AUTOM.COM.COSTABAL Y ECHENIQUE",
    "lat": -33.31325,
    "lng": -70.73501,
    "rut": "91139000",
    "local": "/7/",
    "direccion": "ROBLE 845,LAMPASAN",
    "activo": "S"
  },
  {
    "id": 151,
    "nombre": "AUTOMOTRIZ CORDILLERA S.A. ",
    "lat": -33.39736,
    "lng": -70.58329,
    "rut": "79853470",
    "local": "/14/",
    "direccion": "AV.VITACURA 5171 SAN",
    "activo": "S"
  },
  {
    "id": 152,
    "nombre": "AUTOMOTRIZ CORDILLERA S.A. ",
    "lat": -33.39864,
    "lng": -70.55214,
    "rut": "79853470",
    "local": "/15/",
    "direccion": "AV LAS CONDES 8106 SAN",
    "activo": "S"
  },
  {
    "id": 153,
    "nombre": "AUTOMOTRIZ CORDILLERA S.A. ",
    "lat": -33.3514,
    "lng": -70.51122,
    "rut": "79853470",
    "local": "/18/",
    "direccion": "EL RODEO 13376 SAN",
    "activo": "S"
  },
  {
    "id": 154,
    "nombre": "AUTOMOTRIZ CORDILLERA S.A. ",
    "lat": -33.37334,
    "lng": -70.71251,
    "rut": "79853470",
    "local": "/21/",
    "direccion": "AMERICO VESPUCIO 1730SAN",
    "activo": "S"
  },
  {
    "id": 155,
    "nombre": "AUTOMECANICA PABLO BRAVO LTDA",
    "lat": -33.47949,
    "lng": -70.60198,
    "rut": "76067215",
    "local": "/1/",
    "direccion": "LOS OLMOS 2945 SAN",
    "activo": "S"
  },
  {
    "id": 156,
    "nombre": "AUTOMOTRIZ CARLOS VERDUGO LIMI",
    "lat": -33.447625,
    "lng": -70.624529,
    "rut": "76735880",
    "local": "/1/",
    "direccion": "AV. ITALIA 1442SAN",
    "activo": "S"
  },
  {
    "id": 158,
    "nombre": "SERV.AUTOM .SALVATIERRA CUEVAS",
    "lat": -33.44339,
    "lng": -70.59918,
    "rut": "78532260",
    "local": "/1/",
    "direccion": "LOS LEONES 2664SAN",
    "activo": "S"
  },
  {
    "id": 159,
    "nombre": "TALLERES MORENO LTDA ",
    "lat": -33.47561,
    "lng": -70.60278,
    "rut": "76112325",
    "local": "/1/",
    "direccion": "LAS DALIAS 2259 MACULSAN",
    "activo": "S"
  },
  {
    "id": 160,
    "nombre": "SERVICIO TECNICO GMB LIMITADA",
    "lat": -33.484269,
    "lng": -70.601685,
    "rut": "76578110",
    "local": "/2/",
    "direccion": "EXEQUIEL FERNANDEZ 3305 SAN",
    "activo": "S"
  },
  {
    "id": 161,
    "nombre": "SERVICIOS PATRICIO GARCIA Y CO",
    "lat": -33.45268,
    "lng": -70.6183,
    "rut": "77899910",
    "local": "/2/",
    "direccion": "LUIS BELTRAN 2239SAN",
    "activo": "S"
  },
  {
    "id": 162,
    "nombre": "E. KOVACS Y COMPANÍA LTDA",
    "lat": -33.451551,
    "lng": -70.628952,
    "rut": "80522900",
    "local": "/5/",
    "direccion": "BUSTAMANTE 750 SAN ",
    "activo": "S"
  },
  {
    "id": 164,
    "nombre": "COMERCIAL ORIGEN LTDA. ",
    "lat": -33.37652,
    "lng": -70.52677,
    "rut": "88586100",
    "local": "/1/",
    "direccion": "AV. LAS CONDES11412SAN",
    "activo": "S"
  },
  {
    "id": 237,
    "nombre": "PIAMONTE S.A",
    "lat": -33.48487,
    "lng": -70.605255717,
    "rut": "96642160",
    "local": "/3/",
    "direccion": "Dalias 3227, Macul",
    "activo": "S"
  },
  {
    "id": 238,
    "nombre": "AUTOMOTRIZ FOR CENTER S.A.",
    "lat": -33.4827032,
    "lng": -70.617454717,
    "rut": "76068841",
    "local": "/2/",
    "direccion": "Aysén 503, Macul",
    "activo": "S"
  },
  {
    "id": 165,
    "nombre": "COMPANIA DISTRIBUIDORA AUTOM D",
    "lat": -33.342556,
    "lng": -70.705507,
    "rut": "76427903",
    "local": "/1/",
    "direccion": "FRESIA GALPON A 922313",
    "activo": "S"
  },
  {
    "id": 166,
    "nombre": "EUROPARTS S.A. ",
    "lat": -33.42967,
    "lng": -70.62684,
    "rut": "76216474",
    "local": "/1/",
    "direccion": "BELLAVISTA 0790 SANTIAGO SAN",
    "activo": "S"
  },
  {
    "id": 167,
    "nombre": "KLASSIK CAR S.A. ",
    "lat": -33.38498,
    "lng": -70.55506,
    "rut": "96668460",
    "local": "/1/",
    "direccion": "VITACURA 8126SAN",
    "activo": "S"
  },
  {
    "id": 168,
    "nombre": "MYWEEELS SPA ",
    "lat": -33.311657,
    "lng": -70.706055,
    "rut": "76534605",
    "local": "/1/",
    "direccion": "LOS LIBERTADORES 15 MODULO COL",
    "activo": "S"
  },
  {
    "id": 169,
    "nombre": "ORIGEN SERVICIOS LTDA. ",
    "lat": -33.39962,
    "lng": -70.55299,
    "rut": "76212640",
    "local": "/1/",
    "direccion": "AVDA. LAS CONDES 7944SAN",
    "activo": "S"
  },
  {
    "id": 170,
    "nombre": "SERGIO GAETE YCIA.LTDA.",
    "lat": -33.44795,
    "lng": -70.64505,
    "rut": "85070200",
    "local": "/1/",
    "direccion": "AVENIDA SANTA ROSA 299 SAN",
    "activo": "S"
  },
  {
    "id": 171,
    "nombre": "SERVICIO DOMINICA LTDA ",
    "lat": -33.42771,
    "lng": -70.63993,
    "rut": "76094910",
    "local": "/1/",
    "direccion": "DOMINICA 190 SANTIAGOSAN",
    "activo": "S"
  },
  {
    "id": 1019,
    "nombre": "SEVICIOS AUTOMOTRICES OYARCE L",
    "lat": -33.454053,
    "lng": -70.542436,
    "rut": "76446367",
    "local": "/1/",
    "direccion": "COMPAÑIA DE JESUS 1230",
    "activo": "S"
  },
  {
    "id": 240,
    "nombre": "Pitsautos -SOC. DE INV. SA-NTA FE LTDA",
    "lat": -33.4517249,
    "lng": -70.638887817,
    "rut": "77736980",
    "local": "/2/",
    "direccion": "10 DE JULIO 367",
    "activo": "S"
  },
  {
    "id": 1020,
    "nombre": "SUMMIT MOTORS S.A",
    "lat": -33.4599476,
    "lng": -70.6566774,
    "rut": "76027979",
    "local": "/3/",
    "direccion": "AV.SAN IGNACIO 1075/MATTA  SAN",
    "activo": "S"
  },
  {
    "id": 175,
    "nombre": "SERVICIO DOMINICA LTDA ",
    "lat": -33.39436,
    "lng": -70.68419,
    "rut": "76094910",
    "local": "/2/",
    "direccion": "EL OLIVO 2671 , CONCHALI SAN",
    "activo": "S"
  },
  {
    "id": 176,
    "nombre": "EUROPARTS",
    "lat": -33.37397,
    "lng": -70.69324,
    "rut": "93435000",
    "local": "/3/",
    "direccion": "AV. JOSE MARIA CARO 2635 SAN",
    "activo": "S"
  },
  {
    "id": 177,
    "nombre": "SERGIO GAETE YCIA.LTDA.",
    "lat": -33.30419,
    "lng": -70.71704,
    "rut": "85070200",
    "local": "/3/",
    "direccion": "HERMANOS CARRERA PINTO 160 SAN",
    "activo": "S"
  },
  {
    "id": 1016,
    "nombre": "GRASS Y SERVICIOS LTDA",
    "lat": -33.493817,
    "lng": -70.607641,
    "rut": "78900660",
    "local": "/2/",
    "direccion": "TIL-TIL 2592, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 1017,
    "nombre": "SERVICIO AUTOMO TRIZ FELIPE MILNES",
    "lat": -33.4648512,
    "lng": -70.571884117,
    "rut": "78571020",
    "local": "/1/",
    "direccion": "ALONSO DE BERRIOS 6070 SANTIAGO",
    "activo": "S"
  },
  {
    "id": 251,
    "nombre": "G.R. VALDIVIELS O S.A.",
    "lat": -33.4329435,
    "lng": -70.6417841,
    "rut": "78051230",
    "local": "/1/2/",
    "direccion": "DARDIGNAC 147, Recoleta",
    "activo": "S"
  },
  {
    "id": 253,
    "nombre": "ANFRUNS Y CIA. LTDA.",
    "lat": -33.457701,
    "lng": -70.543816,
    "rut": "79622320",
    "local": "/3/4/",
    "direccion": "LOS CANTEROS 8600, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 254,
    "nombre": "AUTOMOTORES GIL DEMEISTER S.A.",
    "lat": -33.355223,
    "lng": -70.517104,
    "rut": "79649140",
    "local": "/11/",
    "direccion": "AV LA DEHESA 1845",
    "activo": "S"
  },
  {
    "id": 257,
    "nombre": "AUTOMOTORA FRANCO CHILENA S.A.",
    "lat": -33.377477,
    "lng": -70.650862,
    "rut": "93259000",
    "local": "/1/3/4/",
    "direccion": "AMERICO VESPUCIO 785, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 260,
    "nombre": "SERV. AUTOMOTRICES ANSA LTDA.",
    "lat": -33.381814,
    "lng": -70.641091,
    "rut": "89110200",
    "local": "/2/",
    "direccion": "AV.AMERICO VESPUCIO 633, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 261,
    "nombre": "AUTOMOTORA INALCO S.A.",
    "lat": -33.480137,
    "lng": -70.614729,
    "rut": "81198400",
    "local": "/6/",
    "direccion": "DOMINGO ARTEAGA 588, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 262,
    "nombre": "CIDEF COMERCIALS.A.",
    "lat": -33.467271,
    "lng": -70.711681,
    "rut": "79780600",
    "local": "/6/",
    "direccion": "AV.5 DE ABRIL 5757, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 222,
    "nombre": "LE BLANC",
    "lat": -33.459366,
    "lng": -70.645439,
    "rut": "76355766",
    "local": "/2/",
    "direccion": "AVDA. MATTA 840 SANTIAGO",
    "activo": "S"
  },
  {
    "id": 1015,
    "nombre": "DANIEL ACHONDO SA",
    "lat": -33.431657,
    "lng": -70.573653,
    "rut": "83635200",
    "local": "/1/",
    "direccion": "Los libertadores 130",
    "activo": "S"
  },
  {
    "id": 225,
    "nombre": "VALENZUELA Y DELARZE LTDA",
    "lat": -33.48193,
    "lng": -70.616425,
    "rut": "89821000",
    "local": "/1/",
    "direccion": "TIL TIL 2838 MACUL",
    "activo": "S"
  },
  {
    "id": 228,
    "nombre": "EXPERT BYP",
    "lat": -33.385696,
    "lng": -70.688072,
    "rut": "76452256",
    "local": "/1/",
    "direccion": "Panamericana Norte 5011",
    "activo": "S"
  },
  {
    "id": 229,
    "nombre": "INDUMOTORA ONE",
    "lat": -33.454144,
    "lng": -70.635681,
    "rut": "79567420",
    "local": "/1/",
    "direccion": "Coquimbo 345, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 233,
    "nombre": "AUTOMOTRIZ SENEISSE LTDA",
    "lat": -33.462704,
    "lng": -70.629623,
    "rut": "78148730",
    "local": "/1/",
    "direccion": "Santa Elena 1471, Santiago",
    "activo": "S"
  },
  {
    "id": 235,
    "nombre": "LG AUMOTRIZ",
    "lat": -33.406147,
    "lng": -70.67067,
    "rut": "76521052",
    "local": "/1/",
    "direccion": "Las Enredaderas 2385, Independencia",
    "activo": "S"
  },
  {
    "id": 239,
    "nombre": "ROYAL SERVICE AUTOMOTRIZ EIRL",
    "lat": -33.4588445,
    "lng": -70.655582717,
    "rut": "76738146",
    "local": "/1/2/",
    "direccion": "COQUIMBO 1382",
    "activo": "S"
  },
  {
    "id": 241,
    "nombre": "AUTOMOTRIZ ATOM-CAR LIMITADA",
    "lat": -33.4956774,
    "lng": -70.634013317,
    "rut": "76303397",
    "local": "/1/",
    "direccion": "SALVADOR ALLENDE 325",
    "activo": "S"
  },
  {
    "id": 247,
    "nombre": "PORSCHE INTER AUTO CHILE SPA.",
    "lat": -33.372209,
    "lng": -70.518746,
    "rut": "76178493",
    "local": "/3/",
    "direccion": "Av. Las Condes 12260",
    "activo": "S"
  },
  {
    "id": 248,
    "nombre": "INCHCAPE COMERCIAL CHILE S.A.",
    "lat": -33.361502,
    "lng": -70.514756,
    "rut": "76620944",
    "local": "/5/",
    "direccion": "LA DEHESA 545 ,LO BARNECHEA SANTIAGO",
    "activo": "S"
  },
  {
    "id": 249,
    "nombre": "INCHCAPE COMERCIAL CHILE S.A.",
    "lat": -33.38138,
    "lng": -70.532222,
    "rut": "76620944",
    "local": "/4/",
    "direccion": "Av. Las Condes 10740",
    "activo": "S"
  },
  {
    "id": 258,
    "nombre": "AUTOMOTORA NOACK LA REINA LIMITADA",
    "lat": -33.456894,
    "lng": -70.541178,
    "rut": "76256380",
    "local": "/1/",
    "direccion": "LOS HERREROS 8828, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 263,
    "nombre": "OVALLE HERMANOS LTDA.",
    "lat": -33.412739,
    "lng": -70.634104,
    "rut": "86193100",
    "local": "/3/",
    "direccion": "JUAN ELIAS 1700, RECOLETA",
    "activo": "S"
  },
  {
    "id": 264,
    "nombre": "AUTOCAR SPA",
    "lat": -33.40418,
    "lng": -70.651833,
    "rut": "76849904",
    "local": "/1/",
    "direccion": "AV.EINSTEIN 944, RECOLETA",
    "activo": "S"
  },
  {
    "id": 1018,
    "nombre": "COMERCIAL GOLDEN MOTORS LTDA",
    "lat": -33.5470611,
    "lng": -70.5914932,
    "rut": "76111646",
    "local": "/1/2/",
    "direccion": "AV TRINIDAD PONIENTE 99 SAN",
    "activo": "S"
  },
  {
    "id": 11018,
    "nombre": "TALLER IQUIQUE",
    "lat": -20.2549748,
    "lng": -70.1247326,
    "rut": "1",
    "local": "/1/",
    "direccion": "TALLER IQUIQUE",
    "activo": "S"
  },
  {
    "id": 265,
    "nombre": "SOCIEDAD COMERCIAL AUTOCORP LT",
    "lat": -33.439421,
    "lng": -70.615685,
    "rut": "76061774",
    "local": "/2/",
    "direccion": "AV. MANUEL MONTT 1305",
    "activo": "S"
  },
  {
    "id": 231,
    "nombre": "RIOS Y CIA LTDA",
    "lat": -33.457771,
    "lng": -70.643387,
    "rut": "79682520",
    "local": "/1/",
    "direccion": "Santa Rosa 1065 Santiago",
    "activo": "S"
  },
  {
    "id": 246,
    "nombre": "COMERCIAL TECNIK LTDA",
    "lat": -33.483542,
    "lng": -70.604835,
    "rut": "76077283",
    "local": "/1/2/3/",
    "direccion": "Obispo Arturo Espinoza Campos 3115 ,Macul",
    "activo": "S"
  },
  {
    "id": 244,
    "nombre": "Fratellitesta",
    "lat": -33.402483,
    "lng": -70.620583,
    "rut": "76343330",
    "local": "/2/3/",
    "direccion": "Duque de Kent 0959 ,Recoleta",
    "activo": "S"
  },
  {
    "id": 252,
    "nombre": "G.R. VALDIVIELS O S.A.",
    "lat": -33.429873,
    "lng": -70.639325,
    "rut": "78051230",
    "local": "/3/",
    "direccion": "Dominica 57, Recoleta",
    "activo": "S"
  },
  {
    "id": 255,
    "nombre": "NUEVOS S.A.",
    "lat": -33.456614,
    "lng": -70.543612,
    "rut": "99528540",
    "local": "/3/",
    "direccion": "LOS HERREROS 8611, PARQUE INDUSTRIAL DE LA REINA.",
    "activo": "S"
  },
  {
    "id": 256,
    "nombre": "COMERCIAL AUTOM OTRIZ JPN LTDA",
    "lat": -33.354017,
    "lng": -70.509548,
    "rut": "76331390",
    "local": "/2/",
    "direccion": "RUBEN BARRAL 1716, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 259,
    "nombre": "ACHONDO LMTDA.",
    "lat": -33.456745,
    "lng": -70.544908,
    "rut": "78958860",
    "local": "/1/",
    "direccion": "LOS HERREROS 8695, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 267,
    "nombre": "CERDA TAGLE Y C IA LTDA",
    "lat": -33.481407,
    "lng": -70.620223,
    "rut": "76132675",
    "local": "/1/",
    "direccion": "DOMINGO ARTEAGA 102",
    "activo": "S"
  },
  {
    "id": 226,
    "nombre": "GONZALO TIRADO",
    "lat": -33.454914,
    "lng": -70.636391,
    "rut": "78607260",
    "local": "/1/",
    "direccion": "MADRID 931",
    "activo": "S"
  },
  {
    "id": 227,
    "nombre": "REPARACION EXPRESS",
    "lat": -33.482456,
    "lng": -70.62265,
    "rut": "76246656",
    "local": "/1/",
    "direccion": "Schubert 70",
    "activo": "S"
  },
  {
    "id": 230,
    "nombre": "MONTANE Y CIA",
    "lat": -33.455942,
    "lng": -70.650856,
    "rut": "76159765",
    "local": "/1/",
    "direccion": "Zenteno 840 SAN",
    "activo": "S"
  },
  {
    "id": 234,
    "nombre": "Asesorías y servicios DYP S.A",
    "lat": -33.454437,
    "lng": -70.543777,
    "rut": "76050977",
    "local": "/1/",
    "direccion": "La Forja 8551, La Reina",
    "activo": "S"
  },
  {
    "id": 236,
    "nombre": "SALINAS Y FABRE-S S.A.",
    "lat": -33.4716,
    "lng": -70.663551,
    "rut": "91502000",
    "local": "/1/",
    "direccion": "RONDIZZONI 2130",
    "activo": "S"
  },
  {
    "id": 242,
    "nombre": "POMPEYO CARRASC O Y CIA. LTDA.",
    "lat": -33.523655,
    "lng": -70.750793,
    "rut": "81318700",
    "local": "/9/",
    "direccion": "CAMINO A MELIPILLA 11585",
    "activo": "S"
  },
  {
    "id": 243,
    "nombre": "PORSCHE INTER AUTO CHILE SPA.",
    "lat": -33.366287,
    "lng": -70.515686,
    "rut": "76178493",
    "local": "/2/",
    "direccion": "AVENIDA RAUL LABBE 12509, SANTIAGO",
    "activo": "S"
  },
  {
    "id": 245,
    "nombre": "POMPEYO CARRASC O Y CIA. LTDA.\t",
    "lat": -33.483541,
    "lng": -70.604835,
    "rut": "81318700",
    "local": "/8/",
    "direccion": "Obispo Arturo Espinoza Campos 3115 ,Macul",
    "activo": "S"
  },
  {
    "id": 250,
    "nombre": "WILLIAMSON BALF OUR MOTORS S",
    "lat": -33.551085,
    "lng": -70.741614,
    "rut": "96695420",
    "local": "/9/",
    "direccion": "Camino A Lonquén 13070",
    "activo": "S"
  },
  {
    "id": 178,
    "nombre": "AUTOMOTRIZ ANANIAS S.A.",
    "lat": -33.47285,
    "lng": -70.61996,
    "rut": "76556034",
    "local": "/1/",
    "direccion": "WILLIAMS REBOLLEDO 1853SAN",
    "activo": "S"
  },
  {
    "id": 179,
    "nombre": "CURIFOR S.A. ",
    "lat": -33.50958,
    "lng": -70.61064,
    "rut": "92909000",
    "local": "/1/",
    "direccion": "AV. VICUNA MACKENNA 5951 SAN",
    "activo": "S"
  },
  {
    "id": 180,
    "nombre": "DERCO CENTER S.A.",
    "lat": -33.44788,
    "lng": -70.6635,
    "rut": "82995700",
    "local": "/2/",
    "direccion": "JOSE MIGUEL CARRERA 56 SAN",
    "activo": "S"
  },
  {
    "id": 183,
    "nombre": "DERCO CENTER S.A.",
    "lat": -33.50969,
    "lng": -70.59413,
    "rut": "82995700",
    "local": "/5/",
    "direccion": "AV.DEPARTAMENTAL 1499SAN",
    "activo": "S"
  },
  {
    "id": 184,
    "nombre": "CURIFOR S.A. ",
    "lat": -33.5865455,
    "lng": -70.6508636,
    "rut": "92909000",
    "local": "/11/",
    "direccion": "PANAMERICANA SUR KM 35.5 SAN",
    "activo": "S"
  },
  {
    "id": 185,
    "nombre": "DERCO CENTER S.A.",
    "lat": -33.39965,
    "lng": -70.57474,
    "rut": "82995700",
    "local": "/14/",
    "direccion": "AV. KENNEDY 5601 SAN",
    "activo": "S"
  },
  {
    "id": 187,
    "nombre": "DERCO CENTER S.A.",
    "lat": -33.38731,
    "lng": -70.54345,
    "rut": "82995700",
    "local": "/16/",
    "direccion": "AV. KENNEDY 9386 SAN",
    "activo": "S"
  },
  {
    "id": 188,
    "nombre": "AUTOMOTRIZ LOS MONTES S.A. ",
    "lat": -33.3801,
    "lng": -70.57001,
    "rut": "76414789",
    "local": "/1/",
    "direccion": "LUIS PASTEUR 6705SAN",
    "activo": "S"
  },
  {
    "id": 189,
    "nombre": "AUTOMOTRIZ PORTEZUELO S.A. ",
    "lat": -33.39391,
    "lng": -70.5775,
    "rut": "77008670",
    "local": "/1/",
    "direccion": "AVDA VITACURA5555SAN",
    "activo": "S"
  },
  {
    "id": 190,
    "nombre": "Portillo Piramide",
    "lat": -33.40728,
    "lng": -70.56767,
    "rut": "79921560",
    "local": "/1/",
    "direccion": "AVENIDA MANQUEHUE NORTE 139SAN",
    "activo": "S"
  },
  {
    "id": 191,
    "nombre": "AUTOMOTRIZ PORTILLO S.A. ",
    "lat": -33.35535,
    "lng": -70.53414,
    "rut": "79802860",
    "local": "/1/",
    "direccion": "JOSE ALCALDE DELANO 11021SAN",
    "activo": "S"
  },
  {
    "id": 193,
    "nombre": "Portillo Piramide",
    "lat": -33.3924,
    "lng": -70.62722,
    "rut": "79921560",
    "local": "/2/",
    "direccion": "AMERICO VESPUCIO NORTE 095 SAN",
    "activo": "S"
  },
  {
    "id": 195,
    "nombre": "AUTOMOTRIZ PORTILLO S.A. ",
    "lat": -33.38399,
    "lng": -70.55073,
    "rut": "79802860",
    "local": "/4/",
    "direccion": "AV PADRE HURTADO NORTE 1651SAN",
    "activo": "S"
  },
  {
    "id": 196,
    "nombre": "AUTOMOTRIZ PORTILLO S.A. ",
    "lat": -33.37992,
    "lng": -70.56984,
    "rut": "79802860",
    "local": "/5/",
    "direccion": "LUIS PASTEUR 6705 VITACURA SAN",
    "activo": "S"
  },
  {
    "id": 197,
    "nombre": "AUTOMOTRIZ PORTILLO S.A. ",
    "lat": -33.37844,
    "lng": -70.52886,
    "rut": "79802860",
    "local": "/6/",
    "direccion": "LAS CONDES 11120 SAN",
    "activo": "S"
  },
  {
    "id": 198,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.39233,
    "lng": -70.62737,
    "rut": "78976140",
    "local": "/9/",
    "direccion": "AMERICO VESPUCIO 095 SAN",
    "activo": "S"
  },
  {
    "id": 199,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.361414,
    "lng": -70.544416,
    "rut": "78976140",
    "local": "/10/",
    "direccion": "AVDA.J.ALCALDE DELANO 1102 SAN",
    "activo": "S"
  },
  {
    "id": 200,
    "nombre": "COMERCIAL PORTILLO LTDA. ",
    "lat": -33.39379,
    "lng": -70.57739,
    "rut": "78976140",
    "local": "/11/",
    "direccion": "AVENIDA VITACURA5555 SAN",
    "activo": "S"
  },
  {
    "id": 202,
    "nombre": "CIDEF COMERCIALS.A.",
    "lat": -33.437781,
    "lng": -70.60499,
    "rut": "79780600",
    "local": "/1/",
    "direccion": "AV FRANCISCO BILBAO 2124 0 SAN",
    "activo": "S"
  },
  {
    "id": 203,
    "nombre": "COMERCIAL KAUFMANN S.A.",
    "lat": -33.550575,
    "lng": -70.691841,
    "rut": "96572360",
    "local": "/1/",
    "direccion": "AV GLADYS MARIN 5830 SAN",
    "activo": "S"
  },
  {
    "id": 204,
    "nombre": "COMERCIALIZADORA DITEC AUTOMOV",
    "lat": -33.363847,
    "lng": -70.513134,
    "rut": "96899100",
    "local": "/1/",
    "direccion": "RAUL LABBE 12981 SAN",
    "activo": "S"
  },
  {
    "id": 205,
    "nombre": "INGDE SERVAUTOMOTRIZ MACIAS Y",
    "lat": -33.384622,
    "lng": -70.758957,
    "rut": "79575250",
    "local": "/1/",
    "direccion": "av americo vespucio 1256 SAN",
    "activo": "S"
  },
  {
    "id": 209,
    "nombre": "COMERC. DITEC AUTOMOVILES S.A.",
    "lat": -33.39356,
    "lng": -70.62092,
    "rut": "96899100",
    "local": "/2/",
    "direccion": "AV.EL PARQUE 4002SAN",
    "activo": "S"
  },
  {
    "id": 210,
    "nombre": "EDGARDO OSSANDON E HIJOS LTDA.",
    "lat": -33.44814,
    "lng": -70.77939,
    "rut": "77929540",
    "local": "/2/",
    "direccion": "PUERTO VESPUCIO 120 NOFLOTASAN",
    "activo": "S"
  },
  {
    "id": 211,
    "nombre": "H.MOTORES S.A. ",
    "lat": -33.515244,
    "lng": -70.71971,
    "rut": "76124915",
    "local": "/2/",
    "direccion": "CAMINO LONQUEN 8981SAN",
    "activo": "S"
  },
  {
    "id": 212,
    "nombre": "ING.DE SERV.AUTOMOTRIZ MACIAS",
    "lat": -33.435921,
    "lng": -70.785494,
    "rut": "79575250",
    "local": "/2/",
    "direccion": "AMERICO VESPUCIO N° 1256 SAN",
    "activo": "S"
  },
  {
    "id": 213,
    "nombre": "KAUFMANN S.A.VEHICULOS ",
    "lat": -33.46125,
    "lng": -70.71621,
    "rut": "92475000",
    "local": "/2/",
    "direccion": "AV GLADYS MARIN 5830 SAN",
    "activo": "S"
  },
  {
    "id": 214,
    "nombre": "WILLIAMSON BALFOUR MOTORS S. A",
    "lat": -33.31286,
    "lng": -70.73475,
    "rut": "96695420",
    "local": "/2/",
    "direccion": "AV. EL ROBLE 610 SAN",
    "activo": "S"
  },
  {
    "id": 215,
    "nombre": "CIDEF COMERCIALS.A.",
    "lat": -33.4414,
    "lng": -70.62532,
    "rut": "79780600",
    "local": "/2/3/",
    "direccion": "AV.FRANCISCO BILBAO 520SAN",
    "activo": "S"
  },
  {
    "id": 216,
    "nombre": "COMERC. DITEC AUTOMOVILES S.A.",
    "lat": -33.36417,
    "lng": -70.51393,
    "rut": "96899100",
    "local": "/3/",
    "direccion": "AV. RAUL LABBE 12981 SAN",
    "activo": "S"
  },
  {
    "id": 217,
    "nombre": "WILLIAMSON BALFOUR MOTORS S. A",
    "lat": -33.363725,
    "lng": -70.514241,
    "rut": "96695420",
    "local": "/3/",
    "direccion": "AV. LA DEHESA 265 SA SAN",
    "activo": "S"
  },
  {
    "id": 218,
    "nombre": "COMERCIALIZADORA DITEC AUTOMOV",
    "lat": -33.38614,
    "lng": -70.55024,
    "rut": "96899100",
    "local": "/5/",
    "direccion": "AV PADRE HURTADO 1382SAN",
    "activo": "S"
  },
  {
    "id": 219,
    "nombre": "COMERCIALIZADORA DITEC AUTOMOV",
    "lat": -33.42952,
    "lng": -70.79825,
    "rut": "96899100",
    "local": "/6/",
    "direccion": "EL PARQUE 1307 ENEASAN",
    "activo": "S"
  },
  {
    "id": 220,
    "nombre": "WILLIAMSON BALFOUR MOTORS S. A",
    "lat": -33.43757,
    "lng": -70.60316,
    "rut": "96695420",
    "local": "/8/",
    "direccion": "AV. FRANCISCO BILBAO 2245SAN",
    "activo": "S"
  },
  {
    "id": 157,
    "nombre": "AUTOMOTRIZ CARRIL LETELIER LIM",
    "lat": -33.474973,
    "lng": -70.603783,
    "rut": "76252749",
    "local": "/1/",
    "direccion": "OBISPO A ESPINOZA C 2236 SAN",
    "activo": "S"
  },
  {
    "id": 1000,
    "nombre": "AUTOFRANCE LTDA",
    "lat": -33.513012,
    "lng": -70.726837,
    "rut": "84807200",
    "local": "/4/",
    "direccion": "CAMINO A MELIPILLA 9160",
    "activo": "S"
  },
  {
    "id": 1004,
    "nombre": "PATRICIO HIDALG O SOCIEDAD ANON",
    "lat": -33.4683567,
    "lng": -70.7262143,
    "rut": "80463100",
    "local": "/2/",
    "direccion": "GLADYS MARIN 6716",
    "activo": "S"
  },
  {
    "id": 1005,
    "nombre": "AUTOMOTRIZ LAS CONDES B&B LTDA",
    "lat": -33.3739277,
    "lng": -70.707099,
    "rut": "77372730",
    "local": "/2/",
    "direccion": "ALCALDE GUZMAN 0121,QUILICURA",
    "activo": "S"
  },
  {
    "id": 1013,
    "nombre": "KLASSIK CAR S.A. ",
    "lat": -33.2999435,
    "lng": -70.7188952,
    "rut": "96668460",
    "local": "/2/",
    "direccion": "Los libertadores 130",
    "activo": "S"
  },
  {
    "id": 1014,
    "nombre": "ZENIT SEGUROS - PROD",
    "lat": -33.439506,
    "lng": -70.653047,
    "rut": "76061223",
    "local": "/1/",
    "direccion": "Los libertadores 130",
    "activo": "S"
  },
  {
    "id": 19,
    "nombre": "AUTOSUMMIT",
    "lat": -33.488883972168,
    "lng": -70.6401290893555,
    "rut": "96924460",
    "local": "/1/",
    "direccion": "SANTA ROSA",
    "activo": "S"
  },
  {
    "id": 1001,
    "nombre": "SERVICIOS AUTOM OTRICES ISABEL",
    "lat": -33.404005,
    "lng": -70.652348,
    "rut": "76503565",
    "local": "/1/",
    "direccion": "AV. EINSTEIN 853",
    "activo": "S"
  },
  {
    "id": 1003,
    "nombre": "LE BLANC",
    "lat": -33.4610294,
    "lng": -70.6467443,
    "rut": "76355766",
    "local": "/1/",
    "direccion": "AVDA. MATTA 840 SANTIAGO",
    "activo": "S"
  },
  {
    "id": 16,
    "nombre": "AUTOM.MIGUEL JACOB HELO Y CIA.",
    "lat": -33.453384,
    "lng": -70.656021,
    "rut": "78706540",
    "local": "/1/",
    "direccion": "SAN IGNACIO 531 SAN",
    "activo": "S"
  },
  {
    "id": 17,
    "nombre": "ROYAL SERVICE EIRL",
    "lat": -33.4534606933594,
    "lng": -70.6559295654297,
    "rut": "76738146",
    "local": "//1/",
    "direccion": "COQUIMBO 1382",
    "activo": "S"
  },
  {
    "id": 18,
    "nombre": "AUTOFRANCE LTDA",
    "lat": -33.4567680358887,
    "lng": -70.6310272216797,
    "rut": "84807200",
    "local": "/3/",
    "direccion": "SANTA ELENA 1111",
    "activo": "S"
  },
  {
    "id": 6,
    "nombre": "JENSEN AUTOMOTRIZ LTDA.",
    "lat": -33.3751761,
    "lng": -70.6491435,
    "rut": "78145530",
    "local": "/1/2/",
    "direccion": "José Joaquín Aguirre Luco 1315, Huechuraba, Región Metropolitana",
    "activo": "S"
  },
  {
    "id": 7,
    "nombre": "FEDERICO CRISTIAN DIEZ",
    "lat": -33.4554025,
    "lng": -70.5463579,
    "rut": "6694936",
    "local": "/1/2/",
    "direccion": "Los Ceramistas 8550, La Reina, Región Metropolitana",
    "activo": "S"
  },
  {
    "id": 8,
    "nombre": "SERVICIO TECNICO CAMPANARIO SPA",
    "lat": -33.375076,
    "lng": -70.6495139,
    "rut": "76301718",
    "local": "/1/",
    "direccion": "José Joaquín Aguirre Luco 1327, Huechuraba, Región Metropolitana",
    "activo": "S"
  },
  {
    "id": 9,
    "nombre": "PORTILLO NISSAN - AUTOMOTRIZ PORTILLO S.A.",
    "lat": -33.372547,
    "lng": -70.651382,
    "rut": "79802860",
    "local": "/3/",
    "direccion": "El Conquistador del Monte 4808, Huechuraba, Región Metropolitana",
    "activo": "S"
  },
  {
    "id": 10,
    "nombre": "PORTILLO TOYOTA - COMERCIAL PORTILLO LTDA",
    "lat": null,
    "lng": null,
    "rut": "",
    "local": "",
    "direccion": "",
    "activo": ""
  },
  {
    "id": null,
    "nombre": "-33",
    "lat": null,
    "lng": 626869,
    "rut": "/9/12/\"",
    "local": "Av. Americo Vespucio 095, Huechuraba, Región Metropolitana",
    "direccion": "S",
    "activo": ""
  },
  {
    "id": 11,
    "nombre": "TALLER SIGLO XXI - COMERCIAL AUTOM OTRIZ SIGLO XXI",
    "lat": null,
    "lng": null,
    "rut": "",
    "local": "",
    "direccion": "",
    "activo": ""
  },
  {
    "id": null,
    "nombre": "-33",
    "lat": null,
    "lng": 6165925,
    "rut": "/3/\"",
    "local": "Til Til 2838, Macul, Región Metropolitana",
    "direccion": "S",
    "activo": ""
  },
  {
    "id": 12,
    "nombre": "MEDITERRANEO AUTOMOTORES S.A.",
    "lat": null,
    "lng": -70,
    "rut": "96889440",
    "local": "/11/13/",
    "direccion": "MIRADOR AZUL 1482",
    "activo": "S"
  }
 ];

this.talleres.forEach(taller => {
  
  this.lugarservicio.guardarLugar(taller);
  
});
}

  editarLugar(){
    //AHORA ABRIRÁ EL FORMULARIO EN EDITAR

  }
  
}
