import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './seguranca/auth/auth.guard.service';
import { LoginComponent } from './seguranca/login/login.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './views/components/home/home.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsOsClosedComponent } from './views/components/os/os-os-closed/os-os-closed.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsViewsComponent } from './views/components/os/os-views/os-views.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: AppComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },

  { path: 'tecnicos', component: TecnicoReadComponent, canActivate: [AuthGuardService] },
  { path: 'tecnicos/create', component: TecnicoCreateComponent, canActivate: [AuthGuardService] },
  { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent, canActivate: [AuthGuardService] },

  { path: 'clientes', component: ClienteReadComponent, canActivate: [AuthGuardService] },
  { path: 'clientes/create', component: ClienteCreateComponent, canActivate: [AuthGuardService] },
  { path: 'clientes/update/:id', component: ClienteUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'clientes/delete/:id', component: ClienteDeleteComponent, canActivate: [AuthGuardService] },
  
  { path: 'os', component: OsReadComponent, canActivate: [AuthGuardService] },
  { path: 'os/closed', component: OsOsClosedComponent, canActivate: [AuthGuardService] },
  { path: 'os/create', component: OsCreateComponent, canActivate: [AuthGuardService] },
  { path: 'os/update/:id', component: OsUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'os/view/:id', component: OsViewsComponent, canActivate: [AuthGuardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService] // Registra o AuthGuard como um provedor
})
export class AppRoutingModule { }
