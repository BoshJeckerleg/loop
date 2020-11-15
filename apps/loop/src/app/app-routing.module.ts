import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionModule } from './session/session.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<SessionModule> => import('./session/session.module').then((module) => module.SessionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
