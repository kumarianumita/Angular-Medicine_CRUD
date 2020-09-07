import { Routes } from '@angular/router';

import { IndexComponent } from './Components/index/index.component';
import { CreateComponent } from './Components/create/create.component';
import { EditComponent } from './Components/edit/edit.component';

export const appRoutes : Routes=[
    {
        path:'create',
        component:CreateComponent
    },
    {
        path:'edit/id',
        component:EditComponent
    },
    {
        path:'index',
        component:IndexComponent
    }
];