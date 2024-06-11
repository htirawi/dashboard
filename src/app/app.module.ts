import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationSidebarComponent } from './components/navigation-sidebar/navigation-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SiteInformationComponent } from './components/site-information/site-information.component';
import { LiveEventsComponent } from './components/live-events/live-events.component';
import { DeviceStatusComponent } from './components/device-status/device-status.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { WorkersTrendComponent } from './components/workers-trend/workers-trend.component';
import { HazardousZoneComponent } from './components/hazardous-zone/hazardous-zone.component';
import { AlertsInfoComponent } from './components/alerts-info/alerts-info.component';
import { SiteStatsComponent } from './components/site-stats/site-stats.component';
import { NavigationSidebarItemComponent } from './components/navigation-sidebar-item/navigation-sidebar-item.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationSidebarComponent,
    HeaderComponent,
    SiteInformationComponent,
    LiveEventsComponent,
    DeviceStatusComponent,
    WeatherWidgetComponent,
    WorkersTrendComponent,
    HazardousZoneComponent,
    AlertsInfoComponent,
    SiteStatsComponent,
    NavigationSidebarItemComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
