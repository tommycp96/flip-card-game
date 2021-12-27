import {
  INIT_BOARD,
  INIT_STEPS_ATTEMPS,
  INIT_MATCHES,
  CARD_PAIRS_VALUE
} from '../Board';

describe('INIT_BOARD', () => {
  it('should contain valid INIT_BOARD with correct array format', () => {
    expect(INIT_BOARD).toEqual(Array(16).fill(null));
  });
  it('should be defined', () => {
    expect(INIT_BOARD).toBeDefined();
  });
  it('should not be null', () => {
    expect(INIT_BOARD).not.toBeNull();
  });
});

describe('INIT_STEPS_ATTEMPS', () => {
  it('should contain valid INIT_STEPS_ATTEMPS with correct format', () => {
    expect(INIT_STEPS_ATTEMPS).toEqual(0);
  });
  it('should be defined', () => {
    expect(INIT_STEPS_ATTEMPS).toBeDefined();
  });
  it('should not be null', () => {
    expect(INIT_STEPS_ATTEMPS).not.toBeNull();
  });
});

describe('INIT_MATCHES', () => {
  it('should contain valid INIT_STEPS_ATTEMPS with correct format', () => {
    expect(INIT_MATCHES).toEqual(0);
  });
  it('should be defined', () => {
    expect(INIT_MATCHES).toBeDefined();
  });
  it('should not be null', () => {
    expect(INIT_MATCHES).not.toBeNull();
  });
});

describe('CARD_PAIRS_VALUE', () => {
  it('should contain valid CARD_PAIRS_VALUE with correct format', () => {
    expect(CARD_PAIRS_VALUE).toEqual([
      '31',
      '24',
      '23',
      '6',
      '81',
      '15',
      '2',
      '45'
    ]);
  });
  it('should be defined', () => {
    expect(CARD_PAIRS_VALUE).toBeDefined();
  });
  it('should not be null', () => {
    expect(CARD_PAIRS_VALUE).not.toBeNull();
  });
});
