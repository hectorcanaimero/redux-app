// import { createReducer, on } from '@ngrx/store';
// import { loadSolicitud, loadedSolicitud, updateSolicitudSuccess } from '../actions';
// import { SolicitudModel } from '@core/model/solicitud.interfaces';

// export interface SolicitudState {
//   solicitud: SolicitudModel[];
//   loading: boolean;
// }

// export const solicitudState: SolicitudState = {
//   loading: false,
//   solicitud: []
// };

// const _solicitudReducer = createReducer(
//   solicitudState,
//   on(loadSolicitud, (state, { id }) => ({ ...state, loading: true, id })),
//   on(updateSolicitudSuccess, (state,) => ({
//     ...state, loading: false,
//   })),
//   on(loadedSolicitud, (state, { solicitud }) => ({
//     ...state, loading: false, solicitud
//   })),
// );

// export const solicitudReducer = (state: any, action: any) => _solicitudReducer(state, action);
