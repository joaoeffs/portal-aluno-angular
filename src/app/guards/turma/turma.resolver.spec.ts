import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { turmaResolver } from './turma.resolver';

describe('turmaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => turmaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
