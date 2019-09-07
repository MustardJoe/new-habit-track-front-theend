import { postHabits } from '../services/habitsApi';

export const CREATE_HABIT = 'CREATE_HABIT';
export const createHabit = (habit, description) => ({
  type: CREATE_HABIT,
  payload: postHabits(habit, description),
});

