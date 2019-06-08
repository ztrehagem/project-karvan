export interface Point {
  id: number
  x: number
  y: number
  conn: number[]
}

const map: Point[] = [
  { id: 0, x: 0, y: 0, conn: [ 1 ] },
  { id: 1, x: 2, y: 0, conn: [ 0, 2 ] },
  { id: 2, x: 3, y: 1, conn: [ 1 ] },
]

export default map
