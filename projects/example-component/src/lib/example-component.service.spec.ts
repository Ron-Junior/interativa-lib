import { TestBed } from '@angular/core/testing';

import { ExampleComponentService } from './example-component.service';

describe('ExampleComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleComponentService = TestBed.get(ExampleComponentService);
    expect(service).toBeTruthy();
  });
});
