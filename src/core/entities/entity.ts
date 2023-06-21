import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<Props> {
  private _id: UniqueEntityID
  protected props: Props // protected: can be accessed by Entity and classes that extends Entity

  get id() {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }
}
