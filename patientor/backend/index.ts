import express from 'express';
import cors from 'cors';
import diagnoseRoutes from './src/routes/diagnoses';
import patientRoutes from './src/routes/patient';

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/diagnoses',diagnoseRoutes);
app.use('/api/patients',patientRoutes);

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});