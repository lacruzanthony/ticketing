import express from 'express';

const router = express.Router();

router.post('api/users/signup', (req, res) => {
  res.send('Hello');
});

export { router as signupRouter };
