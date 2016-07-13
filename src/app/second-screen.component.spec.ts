import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SecondScreenAppComponent } from '../app/second-screen.component';

beforeEachProviders(() => [SecondScreenAppComponent]);

describe('App: SecondScreen', () => {
  it('should create the app',
      inject([SecondScreenAppComponent], (app: SecondScreenAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'second-screen works!\'',
  //     inject([SecondScreenAppComponent], (app: SecondScreenAppComponent) => {
  //   expect(app.title).toEqual('second-screen works!');
  // }));
});
