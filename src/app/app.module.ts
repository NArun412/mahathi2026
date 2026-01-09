import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { MemberPatientAdministrationComponent } from './pages/healthcare/member-patient-administration/member-patient-administration.component';
import { CoreAdministrationPlatformsComponent } from './pages/healthcare/core-administration-platforms/core-administration-platforms.component';
import { ClaimsManagementComponent } from './pages/healthcare/claims-management/claims-management.component';
import { MedicalManagementComponent } from './pages/healthcare/medical-management/medical-management.component';
import { PharmacyBenefitsManagementComponent } from './pages/healthcare/pharmacy-benefits-management/pharmacy-benefits-management.component';
import { RevenueCycleManagementComponent } from './pages/healthcare/revenue-cycle-management/revenue-cycle-management.component';
import { ComplianceRegulatoryServicesComponent } from './pages/healthcare/compliance-regulatory-services/compliance-regulatory-services.component';
import { FraudWasteAbuseComponent } from './pages/healthcare/fraud-waste-abuse/fraud-waste-abuse.component';
import { ValueBasedCareAnalyticsComponent } from './pages/healthcare/value-based-care-analytics/value-based-care-analytics.component';
import { DigitalAiEnablementComponent } from './pages/healthcare/digital-ai-enablement/digital-ai-enablement.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LocationComponent } from './pages/location/location.component';
import { WorkersCompensiationComponent } from './pages/workers-compensiation/workers-compensiation.component';
import { SolutionGridComponent } from './sharedComponents/solution-grid/solution-grid.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NewsComponent } from './pages/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthcareComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MemberPatientAdministrationComponent,
    CoreAdministrationPlatformsComponent,
    ClaimsManagementComponent,
    MedicalManagementComponent,
    PharmacyBenefitsManagementComponent,
    RevenueCycleManagementComponent,
    ComplianceRegulatoryServicesComponent,
    FraudWasteAbuseComponent,
    ValueBasedCareAnalyticsComponent,
    DigitalAiEnablementComponent,
    LandingPageComponent,
    LocationComponent,
    DigitalAiEnablementComponent,
    WorkersCompensiationComponent,
    SolutionGridComponent,
    WorkersCompensiationComponent,
    AboutusComponent
    WorkersCompensiationComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
