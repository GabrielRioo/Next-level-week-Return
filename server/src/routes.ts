import { prisma } from './prisma';
import express from 'express';
import nodemailer from 'nodemailer';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e9deeca3b52f2e",
    pass: "67e274feb13098"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const {type, comment, screenshot} = req.body // desestrututação

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  )

  await submitFeedbackUseCase.execute({
    type, comment, screenshot
  })
  // await transport.sendMail({
  //   from: 'Equipe Feedget <oi@feedget.com>',
  //   to: 'Gabriel Rio <gabrielpaivario@gmail.com>',
  //   subject: 'Novo feedback',
  //   html: [
  //     `<div style="font-family: sans-serif; font-size: 16px; color: #222">`,
  //     `<p>Tipo do feedback: ${type}</p>`,
  //     `<p> Comentário do ${comment}</p>`,
  //     `</div>`
  //   ].join('\n')
  // });

  return res.status(201).send()
});