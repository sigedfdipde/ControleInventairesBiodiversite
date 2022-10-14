const version = 1;
const config = {
  etude: {
    nom: /ETUDE/i, //nom de la couche sous forme de regex Javascript (/i = insensible majuscule/minuscule)
    champs: [
      { nom: /LIB/i },
      { nom: /OBJECTIF/i },
      { nom: /datedeb/i, type: "date" },
      { nom: /datefin/i, type: "date" }
    ]
  },
  especes: {
    nom: /ESP.CE/i,
    champs: [
      { nom: /dateobs/i, type: "date" },
      { nom: /typeobs/i, liste: ["amphibien", "chiroptère", "flore", "insecte", "invertébré", "lépidoptère", "mammifère", "mollusque", "odonate", "oiseau", "orthoptère", "poisson", "reptile"] },
      { nom: /IdTaxRef/i, liste: taxref },
      { nom: /nomvalid/},
      { nom: /nombre/i, type:"integer"},
      { nom: /invasi/i, type:"boolean"}
    ]
  },
  habitats_especes:{
    nom: /hab.*sp.ce/i,
    champs:[]
  },
  photos:{
    nom: /photo/i,
    champs:[
      { nom: /photo/i, type: "photo"},
      { nom: /date/i, type: "date" }
    ],
  },
  habitats:{
    nom: /habitats(?!.*sp.ce)/i,
    champs:[
      { nom: /date/i, type: "date" },
      { nom: /codecb/i, liste: corinebiotope},
      { nom: /nomcb/i}
    ],
  },
  frayeres:{
    nom: /fray.re/i,
    champs:[
      { nom: /type/i, liste:["phytophile","phyto-lithophile","benthophile","lithophile"]},
      { nom: /date/i, type: "date" },
    ],
  },
  enjeux:{
    nom: /enjeu/i,
    champs:[
      { nom: /enjeu(?!p)/i, liste:["fort","moyen","faible"]},
      { nom: /date/i, type: "date" },
    ],
  },
  fonctionnalites_ecologiques:{
    nom: /fonc.*eco/i,
    champs:[
      { nom: /class/i, liste:["corridor","espace","réservoir","zone de conflit"]},
      { nom: /date/i, type: "date" },
    ],
  },
};