import { TestBed } from '@angular/core/testing';

import { TodosSignalsService } from './todos-signals.service';

describe('TodosSignalsService', () => {
  let service: TodosSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
