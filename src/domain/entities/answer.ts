import { Entity } from "../../core/entities/entity"

interface AnswerProps {
    content: string, authorId: string, questionId: string
}

export class Answer extends Entity<AnswerProps> {
    // getter -> prop can be accessed externaly
    get content() {
        return this.props.content
    }
}