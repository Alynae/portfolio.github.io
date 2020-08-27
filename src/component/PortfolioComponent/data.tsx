const FRONTEND = "FrontEnd";
/* const BACKEND = 'BackEnd' */
const FULLSTACK = "FullStack";

  const data = [
    {
      id: 0,
      name: "Convertisseur",
      img: require("../../img/project/0/ConveritisseurC.jpg"),
      imgSub:{photo:[require("../../img/project/0/ConveritisseurC.jpg")]},
      type: FRONTEND,
      desc:"Le but était de concevoir un convertisseur possédant les mêmes attributs que la calculatrice windows en mode développeur. Il m'a donc fallu écrire un programme qui va permettre la conversion les nombres binaires,décimaux,octaux et hexadécimaux entre eux. La saisie utilisateur doit être possible en base 2,8,10,16 pour la convertir grâce au programme",
      language:'C',
      client:'Callac Soft College',
      date:'Mai 2019',
      service:'Developpement',
    },
    {
      id: 1,
      name: "Logiciel de suivi rh",
      img: require("../../img/project/1/javafx.jpg"),
      imgSub:{photo:[require("../../img/project/1/javafx.jpg"),require("../../img/project/1/Absence.jpg"),require("../../img/project/1/Paie.jpg")]},
      type: FULLSTACK,
      desc:"Projet demandé suite à l'apprentissage de java.Logiciel de gestion de personnel permettant de gérer la liste du personnel, les congés , les absences , la paie. Côté backend les informations sont stockés sur une base SqlLa connection se fait par le biais du connecteur JDBC. Côté front j'ai utilisé javaFx. L'application est constitué d'une fenêtre munie de plusieurs onglets pour naviguer dans chaque partie.Chaque partie est organisé sous la forme de formulaire de saisie , radio bouton , datepicker, dropdown.Un crud complet est possible concernant la fiche personnel.Les features non implantées à ce jour sont les congés , la paie  et l'edition sous format exel ou pdf de la liste complete ou de n'importe quel select effectué en base de donnée.",
      language:'Java / Javafx / mySql',
      client:'Callac Soft College',
      date:'Juillet 2019',
      service:'Developpement',
    },
    {
      id: 2,
      name: "Diaporama",
      img: require("../../img/project/2/diapo.jpg"),
      imgSub: {photo:[require("../../img/project/2/diapo.gif")]},
      type: FRONTEND,
      desc:"Exercice pour se familiariser avec le javascript en mettant en place les mécaniques JS, par la manipulation du DOM. Les contrôles suivant ont été mis en place : Lire les unes après les autres les différentes images,d’arrêter la lecture,passer à l’image suivante, passer à l’image précédente, visualiser la première image, visualiser la dernière image, lecture aléatoire, la mise en place d'un bandeau de miniature pour rendre la navigation plus facile dans la collection d'image.",
      language:'HTML5 / CSS / javascript',
      client:'Callac Soft College',
      date:'Aout 2019',
      service:'Developpement',
    },
    {
      id: 3,
      name: "Quizz",
      img: require("../../img/project/3/quizz.jpg"),
      imgSub:{photo:[require("../../img/project//../../img/project/3/quizz.jpg")]},
      type: FRONTEND,
      desc:"Quizz réalisé pour s'initier à React et aux hooks.L'affichage comprend une barre lié à la progression de l'utilisateur.D'un timer fixé à 40 secondes . Un questionnaire avec 20 questions sur le thème sql. La gestion des réponse et du score doit se faire par un serveur non fait fait à ce jour.",
      language:'Reactjs',
      client:'Callac Soft College',
      date:'Aout 2019',
      service:'Developpement',
    },
    {
      id: 4,
      name: "Dashboard ",
      img: require("../../img/project/4/dashboard1.jpg"),
      imgSub: {photo:[require("../../img/project/4/dashboard1.jpg"),require("../../img/project/4/dashboard2.jpg"),require("../../img/project/4/dashboard3.jpg")]},
      type: FULLSTACK,
      desc:"Projet de fin d'apprentissage du web. Le projet utilise le framework Laravel côté backend et Reactjs côté frontend. Le tableau de bord doit être un outil décisionnel pour un chef d'entrerprise lui donnant les clés pour réagir vite et bien. Un CRUD complet a été mis en place lors de ce projet. Cela m'a permis de construire le projet de A à Z en passant du maquettage , construction du MCD , découverte de l'ORM Eloquent , de React et rect router ainsi que la documentation .",
      language:'Laravel / Mysql / Reactjs',
      client:'Callac Soft College',
      date:'Fevrier 2020',
      service:'Developpement / Design',
    },
    {
      id: 5,
      name: "Portfolio",
      img: require("../../img/project/wip.gif"),
      imgSub: {photo:[require("../../img/project/wip.gif")]},
      type: FRONTEND,
      desc:"Site pour servant de support au même titre qu'un cv. Réaliser avec React et typescript en serverless. Possibilité d'envoie de mail grâce à emailjs.absolute-centerRpotection contre le spam avec le captcha google",
      language:'React / typescript',
      client:'/',
      date:'Aout 2020',
      service:'Developpement / Design',
    },
    {
      id: 6,
      name: "ootrTracker - wip",
      img: require("../../img/project/wip.gif"),
      imgSub: {photo:[require("../../img/project/wip.gif")]},
      type: FRONTEND,
      desc:"Tracker pour suivre la progression des items pour zelda OOTR",
      language:'Javascript',
      client:'/',
      date:'Prévu fin 2020',
      service:'Developpement',
    },
  ];

export default data;