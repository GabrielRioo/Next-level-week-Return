import { FeedbacksRepository } from "../repositories/feedback-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  // private feedbacksRepository: FeedbacksRepository;

  // constructor(
  //   feedbacksRepository: FeedbacksRepository,
  // ) {
  //   this.feedbacksRepository = feedbacksRepository;
  // }

  constructor(
    private feedbacksRepository: FeedbacksRepository,
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type, comment, screenshot,
    })
  }
}