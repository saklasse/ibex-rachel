var theShuffle = rshuffle2("c1", "c2", "c3", "c4", "c5", "c6")
var theShuffle2 = rshuffle2("c1-2", "c2-2", "c3-2", "c4-2", "c5-2", "c6-2")


var shuffleSequence1 = seq("intro", sepWith("sep", seq("pracMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", rshuffle2("practice"), "realMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle, "break", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle2, "sr", "lastPage")));
var shuffleSequence2 = seq("intro", sepWith("sep", seq("pracMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", rshuffle2("practice"), "realMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle2, "break", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle, "sr", "lastPage")));

function chooseShuffle(){
   i = Math.floor(Math.random() * 2);
   console.log(i)

   if (i == 1) {
     return shuffleSequence1
   }
   else {
     return shuffleSequence2
   }
}

var shuffleSequence = chooseShuffle()

var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "",
        ignoreFailure: true
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        randomOrder: false,
        as: [['z', 'el'], ['m', 'la']],
        presentHorizontally: true,
        timeout: 3000
    },
    "Message", {
        hideProgressBar: true,
        transfer: "click"
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

//DID CHANGE TO VALUE OF CSS_INCLUDES_DIR in server_conf.py. Change this back to "css_includes" if messed up
var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    ["sr", "__SendResults__", { }],

    ["sepStart1", "Separator", {normalMessage: "Empieza en...", transfer: 1000 }],
    ["sepStart2", "Separator", {normalMessage: "3...", transfer: 1000 }],
    ["sepStart3", "Separator", {normalMessage: "2...", transfer: 1000 }],
    ["sepStart4", "Separator", {normalMessage: "1...", transfer: 1000 }],

    ["sep", "Separator", { }],
    ["sep", "Separator", {normalMessage: "+"}],

    ["intro", "Message", {
      html: { include: "intro.html"}
    }],

    ["intro", "Form", {
      html: { include: "ConsentFormRevised.html"}
    }],
    ["intro", "Form", {
      html: { include: "questionnaire.html"}
    }],


    ["pracMsg", "Message", {html: {include: "instr1.html"}}],
    ["realMsg", "Message", {html: {include: "instr2.html"}}],
    ["break", "Message", {html: {include: "break.html"}}],
    ["lastPage", "Message", {html: {include: "lastPage.html"}}],

    ["practice", "Question", {hasCorrect: 0, q: "otoño"}],
    ["practice", "Question", {hasCorrect: 0, q: "postre"}],
    ["practice", "Question", {hasCorrect: 1, q: "almohada"}],
    ["practice", "Question", {hasCorrect: 1, q: "sartén"}],
    ["practice", "Question", {hasCorrect: 1, q: "coliflor"}],
    ["practice", "Question", {hasCorrect: 1, q: "ventaja"}],
    ["practice", "Question", {hasCorrect: 0, q: "apoyo"}],
    ["practice", "Question", {hasCorrect: 0, q: "pantalón"}],
    ["practice", "Question", {hasCorrect: 0, q: "nombre"}],
    ["practice", "Question", {hasCorrect: 0, q: "polvo"}],
    ["practice", "Question", {hasCorrect: 1, q: "bufanda"}],
    ["practice", "Question", {hasCorrect: 1, q: "profesión"}],

    ["c1", "Question", {hasCorrect: 0, q: "aeropuerto"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "abrigo"}],
    ["c1", "Question", {hasCorrect: 0, q: "brazo"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "anillo"}],
    ["c1", "Question", {hasCorrect: 0, q: "cepillo"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "color"}],
    ["c1", "Question", {hasCorrect: 0, q: "desayuno"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "cuchillo"}],
    ["c1", "Question", {hasCorrect: 0, q: "mes"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "lago"}],
    ["c1", "Question", {hasCorrect: 0, q: "queso"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "tamaño"}],
    ["c1", "Question", {hasCorrect: 0, q: "sombrero"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "verano"}],
    ["c1", "Question", {hasCorrect: 0, q: "valle"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "zapato"}],

    ["c2", "Question", {hasCorrect: 1, q: "botella"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "calle"}],
    ["c2", "Question", {hasCorrect: 1, q: "camisa"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "camiseta"}],
    ["c2", "Question", {hasCorrect: 1, q: "cuchara"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "campana"}],
    ["c2", "Question", {hasCorrect: 1, q: "escalera"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "flecha"}],
    ["c2", "Question", {hasCorrect: 1, q: "iglesia"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "frontera"}],
    ["c2", "Question", {hasCorrect: 1, q: "leche"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "mano"}],
    ["c2", "Question", {hasCorrect: 1, q: "semana"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "pizarra"}],
    ["c2", "Question", {hasCorrect: 1, q: "uva"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "zanahoria"}],

    ["c3", "Question", {hasCorrect: 1, q: "cebolla"}],
    ["c3-2", "Question", {hasCorrect: 1, q: "bicicleta"}],
    ["c3", "Question", {hasCorrect: 1, q: "guerra"}],
    ["c3-2", "Question", {hasCorrect: 1, q: "boca"}],
    ["c3", "Question", {hasCorrect: 1, q: "impresora"}],
    ["c3-2", "Question", {hasCorrect: 1, q: "espalda"}],
    ["c3", "Question", {hasCorrect: 1, q: "llave"}],
    ["c3-2", "Question", {hasCorrect: 1, q: "mochila"}],
    ["c3", "Question", {hasCorrect: 1, q: "luna"}],
    ["c3-2", "Question", {hasCorrect: 1, q: "pared"}],
    ["c3", "Question", {hasCorrect: 1, q: "maleta"}],
    ["c3-2", "Question", {hasCorrect: 1, q: "sombra"}],
    ["c3", "Question", {hasCorrect: 1, q: "piedra"}],
    ["c3-2", "Question", {hasCorrect: 1, q: "tienda"}],
    ["c3", "Question", {hasCorrect: 1, q: "silla"}],
    ["c3-2", "Question", {hasCorrect: 1, q: "voz"}],


    ["c4", "Question", {hasCorrect: 0, q: "abanico"}],
    ["c4-2", "Question", {hasCorrect: 0, q: "bolso"}],
    ["c4", "Question", {hasCorrect: 0, q: "futuro"}],
    ["c4-2", "Question", {hasCorrect: 0, q: "diente"}],
    ["c4", "Question", {hasCorrect: 0, q: "hombro"}],
    ["c4-2", "Question", {hasCorrect: 0, q: "frío"}],
    ["c4", "Question", {hasCorrect: 0, q: "libro"}],
    ["c4-2", "Question", {hasCorrect: 0, q: "jamón"}],
    ["c4", "Question", {hasCorrect: 0, q: "pasado"}],
    ["c4-2", "Question", {hasCorrect: 0, q: "labio"}],
    ["c4", "Question", {hasCorrect: 0, q: "periódico"}],
    ["c4-2", "Question", {hasCorrect: 0, q: "peso"}],
    ["c4", "Question", {hasCorrect: 0, q: "sueldo"}],
    ["c4-2", "Question", {hasCorrect: 0, q: "pueblo"}],
    ["c4", "Question", {hasCorrect: 0, q: "tambor"}],
    ["c4-2", "Question", {hasCorrect: 0, q: "río"}],


    ["c5", "Question", {hasCorrect: 0, q: "árbol"}],
    ["c5-2", "Question", {hasCorrect: 0, q: "año"}],
    ["c5", "Question", {hasCorrect: 0, q: "beso"}],
    ["c5-2", "Question", {hasCorrect: 0, q: "armario"}],
    ["c5", "Question", {hasCorrect: 0, q: "cinturón"}],
    ["c5-2", "Question", {hasCorrect: 0, q: "deseo"}],
    ["c5", "Question", {hasCorrect: 0, q: "escritorio"}],
    ["c5-2", "Question", {hasCorrect: 0, q: "frigorífico"}],
    ["c5", "Question", {hasCorrect: 0, q: "intento"}],
    ["c5-2", "Question", {hasCorrect: 0, q: "huevo"}],
    ["c5", "Question", {hasCorrect: 0, q: "oro"}],
    ["c5-2", "Question", {hasCorrect: 0, q: "suelo"}],
    ["c5", "Question", {hasCorrect: 0, q: "pegamento"}],
    ["c5-2", "Question", {hasCorrect: 0, q: "teclado"}],
    ["c5", "Question", {hasCorrect: 0, q: "pelo"}],
    ["c5-2", "Question", {hasCorrect: 0, q: "tren"}],


    ["c6", "Question", {hasCorrect: 1, q: "boda"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "bandera"}],
    ["c6", "Question", {hasCorrect: 1, q: "carne"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "cabeza"}],
    ["c6", "Question", {hasCorrect: 1, q: "falda"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "cárcel"}],
    ["c6", "Question", {hasCorrect: 1, q: "fresa"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "cocina"}],
    ["c6", "Question", {hasCorrect: 1, q: "oreja"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "corbata"}],
    ["c6", "Question", {hasCorrect: 1, q: "piscina"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "mesa"}],
    ["c6", "Question", {hasCorrect: 1, q: "sangre"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "rodilla"}],
    ["c6", "Question", {hasCorrect: 1, q: "visita"}],
    ["c6-2", "Question", {hasCorrect: 1, q: "ventana"}]


];
