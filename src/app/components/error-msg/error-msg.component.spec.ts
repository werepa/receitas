import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMsgComponent } from './error-msg.component';

describe('ErrorMsgComponent', () => {
  let component: ErrorMsgComponent;
  let fixture: ComponentFixture<ErrorMsgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMsgComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMsgComponent);
    component = fixture.componentInstance;
  }));

  it('should show if field is touched and error', () => {
    component.field = new FormControl();
    component.field.markAsTouched();
    component.error = 'any_error';
    component.field.setErrors({ any_error: true });

    expect(component.showError()).toBeTruthy();
  });

  it('should hide if field is touched and error is not equal', () => {
    component.field = new FormControl();
    component.field.markAsTouched();
    component.error = 'any_error';
    component.field.setErrors({ other_error: true });

    expect(component.showError()).toBeFalsy();
  });
});
