var theShuffle = rshuffle2("c1-1", "c2-1", "c3-1", "c4-1")
var theShuffle2 = rshuffle2("c1-2", "c2-2", "c3-2", "c4-2")


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
    ["intro", "Form", {
      html: { include: "profTest1.html"}
    }],
    ["intro", "Form", {
      html: { include: "profTest2.html"}
    }],
    ["intro", "Form", {
      html: { include: "profTest3.html"}
    }],


    ["pracMsg", "Message", {html: {include: "instr1.html"}}],
    ["realMsg", "Message", {html: {include: "instr2.html"}}],
    ["break", "Message", {html: {include: "break.html"}}],
    ["lastPage", "Message", {html: {include: "lastPage.html"}}],

    ["practice", "Question", {hasCorrect: 1, q: "chaqueta"}],
    ["practice", "Question", {hasCorrect: 1, q: "mitad"}],
    ["practice", "Question", {hasCorrect: 1, q: "semana"}],
    ["practice", "Question", {hasCorrect: 1, q: "campana"}],
    ["practice", "Question", {hasCorrect: 1, q: "hambre"}],
    ["practice", "Question", {hasCorrect: 1, q: "pimienta"}],
    ["practice", "Question", {hasCorrect: 0, q: "horno"}],
    ["practice", "Question", {hasCorrect: 0, q: "hospital"}],
    ["practice", "Question", {hasCorrect: 0, q: "pasado"}],
    ["practice", "Question", {hasCorrect: 0, q: "bosque"}],
    ["practice", "Question", {hasCorrect: 0, q: "cuchillo"}],
    ["practice", "Question", {hasCorrect: 0, q: "puente"}],

    ["c1-1", "Question", {hasCorrect: 0, q: "año"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "ascensor"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "helado"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "jardín"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "queso"}],
    ["c1-1", "Question", {hasCorrect: 0, q: "vuelo"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "beso"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "dibujo"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "escritorio"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "lago"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "negocio"}],
    ["c1-2", "Question", {hasCorrect: 0, q: "tren"}],

    ["c2-1", "Question", {hasCorrect: 1, q: "cabeza"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "cama"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "cuchara"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "estrella"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "iglesia"}],
    ["c2-1", "Question", {hasCorrect: 1, q: "salud"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "botella"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "canción"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "carne"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "cocina"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "farmacia"}],
    ["c2-2", "Question", {hasCorrect: 1, q: "fresa"}],

    ["c3-1", "Question", {hasCorrect: 0, q: "amor"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "barco"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "cepillo"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "edificio"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "invierno"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "juego"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "libro"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "tenedor"}],
    ["c3-1", "Question", {hasCorrect: 0, q: "vestido"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "anillo"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "brazo"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "coche"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "error"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "labio"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "periódico"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "río"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "teclado"}],
    ["c3-2", "Question", {hasCorrect: 0, q: "valle"}],

    ["c4-1", "Question", {hasCorrect: 1, q: "frase"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "leche"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "mesa"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "naranja"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "nieve"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "piscina"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "pregunta"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "silla"}],
    ["c4-1", "Question", {hasCorrect: 1, q: "verdura"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "bebida"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "bicicleta"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "lluvia"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "maleta"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "nariz"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "oficina"}],
    ["c4-2", "Question", {hasCorrect: 1, q: "paz"}]
    ["c4-2", "Question", {hasCorrect: 1, q: "piedra"}]
    ["c4-2", "Question", {hasCorrect: 1, q: "tienda"}]

];
