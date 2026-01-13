import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
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
import { NewsComponent } from './pages/news/news.component';
import { MainTemplateComponent } from './sharedComponents/main-template/main-template.component';

import { WorkersCompensiationComponent } from './pages/workers-compensiation/workers-compensiation.component';
import { AienablementComponent } from './aienablement/aienablement/aienablement.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

const routes: Routes = [
  {path :"",component:DashboardComponent},
  {path :"header",component:HeaderComponent},
  {path :"footer",component:FooterComponent},  
  {path :"dashboard",component:DashboardComponent},
  {path :"healthcare",component:HealthcareComponent},
  {path :"healthcare/member-patient-administration", component:MemberPatientAdministrationComponent},
  {path :"healthcare/core-administration-platforms", component:CoreAdministrationPlatformsComponent},
  {path :"healthcare/claims-management", component:ClaimsManagementComponent},
  {path :"healthcare/medical-management", component:MedicalManagementComponent},
  {path :"healthcare/pharmacy-benefits-management", component:PharmacyBenefitsManagementComponent},
  {path :"healthcare/revenue-cycle-management", component:RevenueCycleManagementComponent},
  {path :"healthcare/compliance-regulatory-services", component:ComplianceRegulatoryServicesComponent},
  {path :"healthcare/fraud-waste-abuse", component:FraudWasteAbuseComponent},
  {path :"healthcare/value-based-care-analytics", component:ValueBasedCareAnalyticsComponent },
  {path :"healthcare/digital-ai-enablement", component:DigitalAiEnablementComponent},
  { path: 'healthcare/coming-soon', component: LandingPageComponent },
    { path: 'healthcare/location', component: LocationComponent },
  {path :"healthcare/digital-ai-enablement", component:DigitalAiEnablementComponent},
  {path: 'workerscompensiation', component: WorkersCompensiationComponent},
  {path: 'aienablement',component: AienablementComponent},
    {path: 'aboutus', component: AboutusComponent},
  {path: 'workerscompensiation', component: WorkersCompensiationComponent},
  {path: 'workerscompensiation', component: WorkersCompensiationComponent},
  {path: 'News', component: NewsComponent},
  {path: 'workerscompensiation', component: WorkersCompensiationComponent},
  {path: 'maintemp', component: MainTemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,scrollPositionRestoration: 'enabled'} ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
