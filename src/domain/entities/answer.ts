import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface AnswerProps {
    content: string, 
    authorId: UniqueEntityID, 
    questionId: UniqueEntityID
    createdAt: Date
    updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
    // getter -> prop can be accessed externaly
    get content() {
        return this.props.content
    }

    // this function will have the role of the Entity constructor (super)
    static create(props: Optional<AnswerProps, 'createdAt'>, id?: UniqueEntityID) {
        const answer = new Answer({
            ...props,
            createdAt: new Date()
        }, id)

        return answer
    }
}