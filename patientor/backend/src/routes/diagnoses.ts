import express from 'express';
import services from '../services/index';
 
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(services.getDiagnoses());
});

router.get('/:code', (_req, res) => {
  const code = _req.params.code;
  const diagnoses = services.getDiagnosesData(code);
  if(diagnoses){
    return res.send(diagnoses);
  }
  return res.sendStatus(404).send({error:"not found"});
});

router.post('/', (_req, res) => {
  res.send('Saving a diagnoses!');
});



export default router;