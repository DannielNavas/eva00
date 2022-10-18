import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EConfigRoutes } from '@utils/routes/config-routes.enum';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
    },
    {
        path: EConfigRoutes.panel,
        loadChildren: () => import('./pages/panel/panel.module').then(m => m.PanelModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
