import { prisma } from './prisma';
import express from "express";

const app = express();

app.use(express.json()); // vai na requisição e verifica se tem algum body JSON

app.post('/feedbacks', async (req, res) => {
  const {type, comment, screenshot} = req.body // desestrututação

  const feedback = await prisma.feedback.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot,
    }
  })
  return res.status(201).json({data: feedback})
})

app.listen(3333, () => {
  console.log('HTTP server running!')
});