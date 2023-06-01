import { QuestionComment } from '../../enterprise/entities/question-comment'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface ListQuestionCommentsUseCaseRequest {
  page: number
  questionId: string
}

interface ListQuestionCommentsUseCaseResponse {
  questionComments: QuestionComment[]
}

export class ListQuestionCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    page,
    questionId,
  }: ListQuestionCommentsUseCaseRequest): Promise<ListQuestionCommentsUseCaseResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(
        { page },
        questionId,
      )

    return {
      questionComments,
    }
  }
}
