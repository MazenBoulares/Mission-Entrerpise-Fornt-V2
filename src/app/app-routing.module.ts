import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layouts/layout/layout.component';
import { content } from './shared/routes/routes';
import { FullLayoutComponent } from './shared/components/layouts/full-layout/full-layout.component';
import { fullContent } from './shared/routes/full-routes';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/dashboard',
    pathMatch : 'full'
  },
  {
    path : '',
    component : LayoutComponent,
    children : content
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: fullContent
  },
  {
    path : '**',
    redirectTo : '',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
