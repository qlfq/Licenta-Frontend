export interface IRoom {
  id: number
  name: string
  adminUsername: string
  userId: number
  persons: number[]
  createdAt: Date
}
