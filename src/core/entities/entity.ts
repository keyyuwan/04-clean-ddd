import { randomUUID } from "node:crypto"

export class Entity<Props> {
    private _id: string
    protected props: Props // protected: can be accessed by Entity and classes that extends Entity

    get id() {
        return this._id
    }

    constructor(props: Props, id?: string) {
        this.props = props
        this._id = id ?? randomUUID()
    }
}