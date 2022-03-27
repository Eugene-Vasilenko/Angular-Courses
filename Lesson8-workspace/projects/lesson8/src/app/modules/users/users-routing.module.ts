import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../../../../shared/src/lib/components/not-found/not-found.component';
import { LoginGuardService } from '../../../../../shared/src/lib/services/login-guard.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserResolverService } from './services/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        resolve: {
          user: UserResolverService
        }
      }
    ],
    canActivate: [LoginGuardService]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
