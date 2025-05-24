import { image } from 'framer-motion/client'

const elements = [
  {
    id: 1,
    nome: 'Artigiani',
    title: 'Trasforma i tuoi progetti in realtà',
    description: 'Finanziamenti su misura per artigiani',
    features: [
      'Tassi competitivi e approvazione rapida',
      'Gestione semplificata delle fatture',
    ],
    cta: 'Scopri di più',
    image: 'img/artigiani.jpg',
  },
  {
    id: 2,
    nome: 'Famglie',

    image: 'img/famiglia.jpg',
    title: 'Realizza i tuoi programmi in serenità',
    description: 'Prestiti flessibili per la tua famiglia',
    features: ['Rata costante, senza sorprese', 'Piani personalizzabili'],
    cta: 'Calcola la tua rata',
  },
  {
    id: 3,
    nome: 'Grandi Imprese',
    image: 'img/grandi-imprese.jpg',
    title: 'Scalabilità e liquidità per crescere',
    description: 'Linee di credito e dashboard in tempo reale',
    features: [
      'Crediti personalizzati',
      'Dashboard di gestione in tempo reale',
    ],
    cta: 'Richiedi un consulto',
  },
  {
    id: 4,
    nome: 'Professionisti',
    image: 'img/stretta-di-mani.JPG',
    title: 'Gestisci flussi e investimenti',
    description: 'Strumenti smart per ogni professionista',
    features: ['Anticipo fatture in 24h', 'Integrazione con il tuo gestionale'],
    cta: 'Provalo gratis',
  },
  {
    id: 5,
    nome: 'Vacazne',
    image: 'img/vacanze.jpg',
    title: 'La tua vacanza da sogno con un click',
    description: 'Piani di risparmio e finanziamento fino a 24 mesi',
    features: ['Piani di risparmio dedicati', 'Finanziamenti fino a 24 mesi'],
    cta: 'Organizza il viaggio',
  },
]
export default elements
