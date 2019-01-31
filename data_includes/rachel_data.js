var theShuffle = rshuffle2("c1-1", "c2-1", "c3-1", "c4-1")
var theShuffle2 = rshuffle2("c1-2", "c2-2", "c3-2", "c4-2")


var shuffleSequence1 = seq("intro", sepWith("sep", seq("pracMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", rshuffle2("practice"), "realMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle, "break", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle2, "sr", )));
var shuffleSequence2 = seq("intro", sepWith("sep", seq("pracMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", rshuffle2("practice"), "realMsg", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle2, "break", "sepStart1", "sepStart2", "sepStart3", "sepStart4", theShuffle, "sr", )));

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

    ["practice", "Question", {hasCorrect: 0, q: "ajo"}],
    ["practice", "Question", {hasCorrect: 0, q: "puente"}],
    ["practice", "Question", {hasCorrect: 0, q: "tamaño"}],
    ["practice", "Question", {hasCorrect: 1, q: "amistad"}],
    ["practice", "Question", {hasCorrect: 1, q: "fresa"}],
    ["practice", "Question", {hasCorrect: 1, q: "hambre"}],
    ["practice", "Question", {hasCorrect: 0, q: "año"}],
    ["practice", "Question", {hasCorrect: 0, q: "cuaderno"}],
    ["practice", "Question", {hasCorrect: 0, q: "trabajo"}],
    ["practice", "Question", {hasCorrect: 1, q: "canción"}],
    ["practice", "Question", {hasCorrect: 1, q: "luz"}],
    ["practice", "Question", {hasCorrect: 1, q: "profesión"}],

    ["c1-1", "Question", {hasCorrect: 0, q: "amor"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "dibujo"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "pepino"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "prestámo"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "sol"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "tratamiento"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "verano"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "vuelo"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "bolso"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "brazo"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "jardín"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "labio"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "mundo"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "queso"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "zapato"}],

    ["c2-1", "Question", {hasCorrect: 1, q: "botella"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "ciencia"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "duda"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "llave"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "montaña"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "nariz"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "verdura"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "experiencia"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "frontera"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "bicicleta"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "cebolla"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "leche"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "mesa"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "tienda"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "vivienda"}],

    ["c3-1", "Question", {hasCorrect: 0, q: "corazón"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "libro"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "oro"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "peligro"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "helado"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "huevo"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "edificio"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "lápiz"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "desayuno"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "escritorio"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "milagro"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "país"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "pasado"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "pelo"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "teclado"}],

    ["c4-1", "Question", {hasCorrect: 1, q: "cabeza"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "comida"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "hoja"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "rueda"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "sangre"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "ventaja"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "cerveza"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "playa"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "cama"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "carne"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "comprensión"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "oficina"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "piscina"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "semilla"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "ventana"}]

];
