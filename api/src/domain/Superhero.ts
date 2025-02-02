// domain/Superhero.ts
export class Superhero {
  constructor(
    public id: number | null,
    public superhero_name: string,
    public superpower: string,
    public humility_score: number,
    public createdAt?: Date
  ) {}
}
