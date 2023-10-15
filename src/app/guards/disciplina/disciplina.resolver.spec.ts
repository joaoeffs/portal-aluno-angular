import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { disciplinaResolver } from './disciplina.resolver';

describe('disciplinaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => disciplinaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
