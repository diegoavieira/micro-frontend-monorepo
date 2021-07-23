import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: 'shop',
    component: NavigationComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./navigation/navigation.module').then((m) => m.NavigationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
