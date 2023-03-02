import { Request, Response,API} from 'lambda-api';
import { MutationController } from "./lib/MutationController";

const api = require('lambda-api')();

api.use((err,req,res,next) => next())
// modern module syntax

api.post('/mutation', async (req: Request, res: Response) => {
  const { dna } = req.body;
  const matrixDna= MutationController.buildMatrix(dna)
  const hasMutation = MutationController.hasMutation(matrixDna)

  if(!hasMutation) return res.sendStatus(403)
  return res.sendStatus(200)
});


api.get('/sls', async (req: Request, res: Response) => {
  return res.status(200).send({"message":"Severless framework nodejs with typescript plugin"})
});


export async function handler (event, context) {
  console.log(event);
  return await api.run(event, context);
};
