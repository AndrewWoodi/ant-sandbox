import { powers } from 'src/app/model';
import { QualifiersPipe } from './qualifiers.pipe';

describe('QualifiersPipe', () => {
  it('create an instance', () => {
    const pipe = new QualifiersPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms power to "qualifiers"', () => {
    const pipe = new QualifiersPipe();
    const powerSource = 'Really Smart';
    expect(pipe.transform(powerSource)?.length).toBe(3);
  });

  it('returns empty array for unknown qualifier', () => {
    const pipe = new QualifiersPipe();
    const powerSource = 'abcx';
    expect(pipe.transform(powerSource)?.length).toBe(0);
  });
});
