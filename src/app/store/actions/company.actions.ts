import { createAction, props } from '@ngrx/store';
import { ErrorModel } from '@core/model/error.interface';
import { CompanyModel } from '@core/model/company.interfaces';

export const loadCompany = createAction( '[Company] Load Company Success' );

export const loadedCompany = createAction(
  '[Company] Loaded Company Success',
  props<{ company: CompanyModel[] }>()
);

export const loadedCompanyError = createAction(
  '[Company] Loaded Company Error',
  props<{ payload: ErrorModel[] }>()
);
