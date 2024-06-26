import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:HomeComponent,
        title:"Home | CricBlitz"
    },
    {
        path: 'live',
        component:LiveComponent,
        title:"Live Matches | CricBlitz"
    },
    {
        path: 'history',
        component:HistoryComponent,
        title:"Match History | CricBlitz"
    },
    {
        path: 'point-table',
        component:PointTableComponent,
        title:"Point Table | CricBlitz"
    }
];
