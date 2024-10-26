import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BusIdComponent } from './bus-id/bus-id.component';
import { AddComponent } from './add/add.component';
import { ModComponent } from './mod/mod.component';
import { EliComponent } from './eli/eli.component';

export const routes: Routes = [
    {
        path:"",
        component:MainComponent
    },
    {
        path:"agregar",
        component: AddComponent
    },
    {
        path:"buscarid",
        component:BusIdComponent
    },
    {
        path:"modificar",
        component:ModComponent
    },
    {
        path:"eliminar",
        component: EliComponent
    }
];

