import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SiteInformationComponent } from './components/site-information/site-information.component';
import { LiveEventsComponent } from './components/live-events/live-events.component';
import { DeviceStatusComponent } from './components/device-status/device-status.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';

const routes: Routes = [
  { path: '', redirectTo: '/realtime', pathMatch: 'full' },
  { path: 'realtime', component: MainDashboardComponent },
  { path: 'events', component: LiveEventsComponent },
  { path: 'domain', component: DeviceStatusComponent },
  { path: 'settings', component: WeatherWidgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
