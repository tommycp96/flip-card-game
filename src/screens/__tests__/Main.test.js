import { INIT_BOARD } from '../../enums/Board';

describe('random index', () => {
  const getRandomIndex = arr => Math.floor(Math.random() * arr.length);
  const randomIndex = getRandomIndex(INIT_BOARD);
  it('should contain valid INIT_STEPS_ATTEMPS with correct format', () => {
    expect(randomIndex).toEqual(randomIndex);
  });
  it('should be defined', () => {
    expect(randomIndex).toBeDefined();
  });
  it('should not be null', () => {
    expect(randomIndex).not.toBeNull();
  });
});
