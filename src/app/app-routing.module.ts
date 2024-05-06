import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    loadChildren: () => import('./Screens/settings/settings.module').then( m => m.SettingsPageModule)
  },
  
  {
    path: 'messages',
    loadChildren: () => import('./Screens/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Screens/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./Screens/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'dashboard1',
    loadChildren: () => import('./Screens/dashboard1/dashboard1.module').then( m => m.Dashboard1PageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./Screens/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./Screens/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
 
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
