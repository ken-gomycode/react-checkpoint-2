import {PlayerType} from "./types.ts";

const defaultImage = "https://preview.redd.it/4ixnult45bk51.jpg?auto=webp&s=acf3cabec81807742820c954be4223c4be30d1a5";

const players: PlayerType[] = [
  {
    "name":"Lionel Messi",
    "team":"Inter Miami",
    "nationality":"Argentina",
    "jerseyNumber":10,
    "age":36,
    "imageUrl":"https://media.gettyimages.com/id/1176667280/photo/milan-italy-the-best-fifa-mens-player-award-finalist-lionel-messi-of-barcelona-and-argentina.jpg?s=612x612&w=0&k=20&c=deNh4nce7DhLlU9pMk4OAjvy71c2TRM1ndp8-ePflIo="
  },
  {
    "name":"Cristiano Ronaldo",
    "team":"Al-Nassr",
    "nationality":"Portugal",
    "jerseyNumber":7,
    "age":39,
    "imageUrl":"https://media.gettyimages.com/id/1182905719/photo/turin-italy-cristiano-ronaldo-of-juventus-looks-on-prior-to-the-uefa-champions-league-group-d.jpg?s=612x612&w=0&k=20&c=JH9JNuEteiI3e3cqnXi0W4ykdjE6VDYK-oQojoj2h2k="
  },
  {
    "name":"Kevin De Bruyne",
    "team":"Manchester City",
    "nationality":"Belgium",
    "jerseyNumber":17,
    "age":32,
    "imageUrl":"https://media.gettyimages.com/id/1498386528/photo/istanbul-turkey-kevin-de-bruyne-of-manchester-city-fc-lines-up-for-the-uefa-champions-league.jpg?s=612x612&w=0&k=20&c=zSCd5PNDuHRm4tt4XUpcsKIUTWf_Fncb45EGuX8iXsM="
  },
  {
    "name":"Kylian Mbappé",
    "team":"Paris Saint-Germain",
    "nationality":"France",
    "jerseyNumber":7,
    "age":25,
    "imageUrl":"https://media.gettyimages.com/id/2173675059/photo/madrid-spain-kylian-mbapp%C3%A9-of-real-madrid-looks-on-during-the-laliga-match-between-real.jpg?s=612x612&w=0&k=20&c=1b_8ewxcKWy8RALpnVDzPzIIHLJA0o86eKGpbP4UMOY="
  },
  {
    "name":"Neymar Jr.",
    "team":"Al-Hilal",
    "nationality":"Brazil",
    "jerseyNumber":10,
    "age":32,
    "imageUrl":"https://media.gettyimages.com/id/1242833562/photo/paris-neymar-da-silva-santos-junior-of-paris-saint-germain-during-the-french-ligue-1-match.jpg?s=612x612&w=0&k=20&c=0RGNqsjaZMKY1LWtRG_n6qls7um96LHwb0378cAau0A="
  },
  {
    "name":"Mohamed Salah",
    "team":"Liverpool",
    "nationality":"Egypt",
    "jerseyNumber":11,
    "age":31,
    "imageUrl": "https://media.gettyimages.com/id/1433426757/photo/glasgow-scotland-mohamed-salah-of-liverpool-fc-during-the-uefa-champions-league-group-a-match.jpg?s=612x612&w=0&k=20&c=ZkFGXWEqFRS0b28_jgwpXpXGdjyz1fDb-AgS_fMYrnA="
  },
  {
    "name":"Robert Lewandowski",
    "team":"Barcelona",
    "nationality":"Poland",
    "jerseyNumber":9,
    "age":35,
    "imageUrl": "https://media.gettyimages.com/id/2176104041/photo/barcelona-spain-robert-lewandowski-of-fc-barcelona-looks-on-during-the-uefa-champions-league.jpg?s=612x612&w=0&k=20&c=sH1CkdzuYjTVF3nab0hQFFY7dJkLq_-FSUELjNPSUKk="
  },
  {
    "name":"Luka Modrić",
    "team":"Real Madrid",
    "nationality":"Croatia",
    "jerseyNumber":10,
    "age":38,
    "imageUrl": defaultImage
  },
  {
    "name":"Erling Haaland",
    "team":"Manchester City",
    "nationality":"Norway",
    "jerseyNumber":9,
    "age":24,
    "imageUrl": defaultImage
  },
  {
    "name":"Vinícius Jr.",
    "team":"Real Madrid",
    "nationality":"Brazil",
    "jerseyNumber":7,
    "age":23,
    "imageUrl": defaultImage
  },
  {
    "name":"Harry Kane",
    "team":"Bayern Munich",
    "nationality":"England",
    "jerseyNumber":9,
    "age":30,
    "imageUrl":"https://media.gettyimages.com/id/1320161344/photo/leicester-england-harry-kane-of-tottenham-hotspur-during-the-premier-league-match-between.jpg?s=612x612&w=0&k=20&c=xsqLEDIaX_1kgyHUMCtDVEypkfWoO2xwuw3LPl3MlyQ="
  },
  {
    "name":"Bruno Fernandes",
    "team":"Manchester United",
    "nationality":"Portugal",
    "jerseyNumber":8,
    "age":29,
    "imageUrl": defaultImage
  },
  {
    "name":"Jude Bellingham",
    "team":"Real Madrid",
    "nationality":"England",
    "jerseyNumber":5,
    "age":20,
    "imageUrl": defaultImage
  },
  {
    "name":"Antoine Griezmann",
    "team":"Atletico Madrid",
    "nationality":"France",
    "jerseyNumber":7,
    "age":33,
    "imageUrl": defaultImage
  },
  {
    "name":"Casemiro",
    "team":"Manchester United",
    "nationality":"Brazil",
    "jerseyNumber":18,
    "age":32,
    "imageUrl": defaultImage
  },
  {
    "name":"Declan Rice",
    "team":"Arsenal",
    "nationality":"England",
    "jerseyNumber":41,
    "age":25,
    "imageUrl": defaultImage
  },
  {
    "name":"Gavi",
    "team":"Barcelona",
    "nationality":"Spain",
    "jerseyNumber":6,
    "age":19,
    "imageUrl": "https://media.gettyimages.com/id/1497956935/photo/madrid-spain-gavi-of-spain-poses-for-a-portrait-during-the-spain-finalists-access-day-uefa.jpg?s=612x612&w=0&k=20&c=DJ4xhf_h4Y26K2YzN2u96Ef3JoeXBrNHoje_laHrekM="
  },
  {
    "name":"Khvicha Kvaratskhelia",
    "team":"Napoli",
    "nationality":"Georgia",
    "jerseyNumber":77,
    "age":23,
    "imageUrl": defaultImage
  },
  {
    "name":"Rodri",
    "team":"Manchester City",
    "nationality":"Spain",
    "jerseyNumber":16,
    "age":27,
    "imageUrl":"https://media.gettyimages.com/id/622359406/photo/spain-la-liga-santander-2016-2017-rodrigo-hernandez-cascante.jpg?s=612x612&w=0&k=20&c=UBaHFNKigDUB45C8aLT5v6MRHjxUfvVY_-iMjnlWOvA="
  },
  {
    "name":"Victor Osimhen",
    "team":"Napoli",
    "nationality":"Nigeria",
    "jerseyNumber":9,
    "age":25,
    "imageUrl": defaultImage
  }
];

export default players;
