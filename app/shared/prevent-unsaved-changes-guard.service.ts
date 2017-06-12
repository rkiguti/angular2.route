import { CanDeactivate } from '@angular/router';

import { FormComponent } from './form-component.interface';

export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent> {
    canDeactivate(component: FormComponent) {
        if (component.hasUnsavedChanges()) {
            return confirm("Are you sure?");
        }

        return true;
    }
}