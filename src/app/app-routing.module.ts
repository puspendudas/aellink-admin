import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuardLoginService } from './services/auth-guard-login.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table' 
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuardLoginService]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'details',
    loadChildren: () => import('./modals/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'trans',
    loadChildren: () => import('./pages/trans/trans.module').then( m => m.TransPageModule)
  },
  {
    path: 'swap',
    loadChildren: () => import('./pages/swap/swap.module').then( m => m.SwapPageModule)
  },
  {
    path: 'trans',
    loadChildren: () => import('./modals/trans/trans.module').then( m => m.TransPageModule)
  },
  {
    path: 'swap',
    loadChildren: () => import('./modals/swap/swap.module').then( m => m.SwapPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    NgxMatFileInputModule,
    MatAutocompleteModule
  ]
})
export class AppRoutingModule {}
