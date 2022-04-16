import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  }, */
  
  {
    path: 'folder/:id', canActivate:[AuthGuardGuard],
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'calendar',canActivate:[AuthGuardGuard],
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'cal-modal',canActivate:[AuthGuardGuard],
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  
  /* {
    path: 'agenda-edit-popover',
    loadChildren: () => import('./pages/agenda-edit-popover/agenda-edit-popover.module').then( m => m.AgendaEditPopoverPageModule)
  } ,*/
  {
    path: 'agenda-edit',canActivate:[AuthGuardGuard],
    loadChildren: () => import('./modals/agenda-edit/agenda-edit.module').then( m => m.AgendaEditPageModule)
  },  
  {
    path: 'configuracion',canActivate:[AuthGuardGuard],
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
