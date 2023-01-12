const express = require('express');
const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/WorkoutController');
const requireAuth = require('../middlewares/RequireAuth');


const router = express.Router();

// require auth for all workout routes.
router.use(requireAuth);

router.get('/', getWorkouts);

router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router;