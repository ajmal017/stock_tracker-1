import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DashboardPage} from './dashboard.page';
import {StockTrackerModule} from '../../features/stock-tracker/stock-tracker.module';
import {AppRoutingModule} from '../../app-routing.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {DashboardNewsContainerComponent} from './container/dashboard-news-container/dashboard-news-container.component';
import {DashboardTopTableContainerComponent} from './container/dashboard-top-table-container/dashboard-top-table-container.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StockTrackerModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DashboardPage,
        DashboardTopTableContainerComponent,
        DashboardNewsContainerComponent,
    ]
})
export class DashboardPageModule {
}
