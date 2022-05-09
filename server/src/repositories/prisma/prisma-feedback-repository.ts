import { prisma } from "../../prisma";
import { FeedbackCreateDate, FeedbacksRepository } from "../feedback-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({type, comment, screenshot}: FeedbackCreateDate) {
    await prisma.feedback.create({
      data: {
        type: type,
        comment: comment,
        screenshot: screenshot,
      }
    })
  }
}
