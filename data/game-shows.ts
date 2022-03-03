type Player = {
  name: string
  score: number
}

export type GameShow = {
  id: string
  date: string
  players: Player[]
}

const shows: GameShow[] = [
  {
    id: "1",
    date: "2022-03-03",
    players: [
      {
        name: "@pappras",
        score: 100
      },
      {
        name: "@someone",
        score: 200
      },
      {
        name: "@foxboy",
        score: 150
      }
    ]
  }
]

export default shows
