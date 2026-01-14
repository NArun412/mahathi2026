import { Component, ElementRef, ViewChild, AfterViewInit,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSearchItem, GlobalSearchService } from 'src/app/global-search.service';
import { MainTemplateData } from 'src/app/sharedComponents/main-template/main-template.model';

interface Leader {
  id: number;
  filename: string;
  name: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private searchService: GlobalSearchService,) {}

  leadershipRows = [
  { id: 1, filename: 'anand1.png', name: 'Anand Mahalingham', title: 'Senior Vice President & Client Partner – Insurance', description: 'Dummy description', link: '#' },
  { id: 2, filename: 'Harish.png', name: 'Harish R', title: 'Vice President & Client Partner – Legal & ManLog', description: 'Dummy description', link: '#' },
  { id: 3, filename: 'pamela1.png', name: 'Pam Bogdanovich', title: 'Client Engagement Director', description: 'Dummy description', link: '#' },
  { id: 4, filename: 'Tracey.png', name: 'Tracey Seals', title: 'Client Engagement Director', description: 'Dummy description', link: '#' },

  { id: 5, filename: 'ed_caldwell.png', proves: 'you must add image', name: 'Ed Caldwell', title: 'Client Engagement', description: 'Dummy description', link: '#' },
  { id: 6, filename: 'kathy_macdonald.png', name: 'Kathy MacDonald', title: 'Client Engagement Manager', description: 'Dummy description', link: '#' },
  { id: 7, filename: 'michael_reynolds.png', name: 'Michael Reynolds', title: 'Director of Sales', description: 'Dummy description', link: '#' },

  { id: 8, filename: 'ganesan.png', name: 'Ganesan Durairaj', title: 'Senior Vice President', description: 'Dummy description', link: '#' },
  { id: 9, filename: 'niru.png', name: 'Nirupama Rajendran', title: 'Head of Business Consulting – Insurance', description: 'Dummy description', link: '#' },
  { id: 10, filename: 'pranesh.png', name: 'Pranesh Mahendran', title: 'Delivery Partner - Insurance', description: 'Dummy description', link: '#' },
  { id: 11, filename: 'sukumar3.png', name: 'Sukumar Karuppusamy', title: 'Technology Partner - Insurance', description: 'Dummy description', link: '#' },
  { id: 12, filename: 'J7.png', name: 'Jerry Gonsel', title: 'Head of Operations', description: 'Dummy description', link: '#' },
  { id: 13, filename: 'dhy_main.png', name: 'Dhyanesh Mahendran', title: 'Head of Infrastructure & Business Process Management', description: 'Dummy description', link: '#' },
  { id: 14, filename: 'santhosh.png', name: 'Santhosh Kumar', title: 'Head of Technology Incubation & Innovation', description: 'Dummy description', link: '#' },
  { id: 15, filename: 'thani.png', name: 'Thanikaivel Ekambaram', title: 'Head of Information Security', description: 'Dummy description', link: '#' },
  { id: 16, filename: 'rajkumar.png', name: 'Rajkumar Kanagaraju', title: 'Head of Quality Assurance & Automation', description: 'Dummy description', link: '#' },
  { id: 17, filename: 'dominic.png', name: 'Dominic Lintan', title: 'Manager & Lead, Philippines Operations', description: 'Dummy description', link: '#' },
  { id: 18, filename: 'petite.png', name: 'Petite Apostol', title: 'Lead Quality Assurance Engineer', description: 'Dummy description', link: '#' }
];


  // IMPORTANT for DOM stability (hover / animation / CSS consistency)
  trackById(index: number, item: Leader): number {
    return item.id;
  }

  ngOnInit(): void {
    if (this.router.url === '/about/founders') {
      window.scroll(0, 2500);
    }
  }

  ngAfterViewInit(): void {
       this.registerPageContent();
    setTimeout(() => {
      window.scrollTo({
        top: 30,
        behavior: 'smooth'
      });
    }, 200);
  }

  private registerPageContent(): void {
  const items: GlobalSearchItem[] = [];

  const elements = Array.from(
    document.querySelectorAll('h1, h2, h3, p, li')
  );

  elements.forEach((el: Element, index: number) => {
    const text = el.textContent?.trim();
    if (!text) return;

    const id = `search-${this.router.url.replace(/\//g, '')}-${index}`;
    el.setAttribute('id', id);

    items.push({
      text,
      route: this.router.url,
      elementId: id
    });
  });

  this.searchService.register(items);
}

   healthcareData: MainTemplateData = {
      sectionOneText: "",
      sectionTwoText: 'Healthcare Technology & Digital Services',
      sectionThreeText:
        "Mahathi Infotech partners with healthcare payers, providers, TPAs, and digital health organizations to modernize core operations through scalable technology, data, and AI-led services.",
  
      heroImage: 'assets/images/enhanced_customer_experience.png',
      solutionsHeading: "Streamline operations, Ensure compliance, and Enhance outcomes",
      rightHeroImage:'assets/images/happy_people3.png',
      features: [
        { label: 'Property & Casualty Solutions', icon: 'bi bi-tv' },
        { label: 'Policy Administration', icon: 'bi bi-tv' },
        { label: 'Billing Solutions', icon: 'bi bi-bank' },
        { label: 'Claims & Medical Management', icon: 'bi bi-building' },
        { label: 'Medical & Pharmacy Management', icon: 'bi bi-heart-pulse' },
        { label: 'Litigation & Investigative Services', icon: 'bi bi-shield-check' },
        { label: 'Regulatory Compliance & Technology', icon: 'bi bi-bag' },
        { label: 'Claims Regulatory Reporting', icon: 'bi bi-broadcast' },
        { label: 'Policy Regulatory Services', icon: 'bi bi-signpost-split' },
        { label: 'Regulatory Filing & Audit Support', icon: 'bi bi-lightning' }
      ],
  
  
      industries: [
        { label: 'Cable', icon: 'bi bi-tv' },
        { label: 'Financial Services', icon: 'bi bi-bank' },
        { label: 'Government', icon: 'bi bi-building' },
        { label: 'Healthcare', icon: 'bi bi-heart-pulse' },
        { label: 'Insurance', icon: 'bi bi-shield-check' },
        { label: 'Retail', icon: 'bi bi-bag' },
        { label: 'Telecommunications', icon: 'bi bi-broadcast' },
        { label: 'Tolling', icon: 'bi bi-signpost-split' },
        { label: 'Utilities', icon: 'bi bi-lightning' }
      ],
  
     solutions : [
      {
        title: 'Property & Casualty Solutions',
        description:
          'Our Property & Casualty platform delivers comprehensive support across admitted package lines, excess & surplus, and specialty products for commercial lines business. With flexible rating engines, seamless policy administration integration, and advanced claims management, we address today’s complex risk landscape with scale and efficiency. Our E&S capabilities include a flexible rating accelerator and agency management system with automated taxes, surcharges, and surplus lines compliance across all states. Vertical-specific specialty solutions support industries such as healthcare, hospitality, technology, construction, cyber, and professional liability. A multi-state licensed service center, enhanced by digitized mailroom operations, supports both admitted and E&S lines across all 50 states and Washington, DC.',
        cta: 'Discover our channel capabilities',
        image: '../../../assets/images/C_Property_Cas.png'
      },
      {
        title: 'Policy Administration',
        description:
          'Our platform seamlessly integrates with leading policy administration systems such as Guidewire, Duck Creek, OrigamiRisk, and MIS Group. It connects to external rating engines and digital aggregators to enable real-time pricing, faster quote-to-bind cycles, and expanded distribution. Combined with a comprehensive underwriting workbench and self-service portals, our digital tools empower agents, brokers, and insureds with 24/7 access to policies, certificates, and documentation.',
        cta: 'Schedule a demo',
        image: '../../../assets/images/C_Policy Admin.png'
      },
      {
        title: 'Billing Solutions',
        description:
          'Our billing solutions support both direct and agency bill models, handling complex scenarios such as deductible billing, installment plans, premium adjustments, and audits with accuracy and transparency. Integrated bordereaux reporting enables detailed premium and claims reconciliation for reinsurance and delegated authority arrangements, while automated workflows reduce manual effort and ensure compliance through complete audit trails.',
        cta: 'Discover our channel capabilities',
    image: '../../../assets/images/C_Billing.png'
      },
      {
        title: 'Claims & Medical Management',
        description:
          'Our unified claims platform equips handlers with end-to-end adjudication tools, including integrated workflows, diary management, reserve and payment processing, and real-time decision support. A digitized mailroom with intelligent document recognition automates inbound and outbound communications, significantly reducing manual effort while improving accuracy and traceability. Predictive analytics further enhance outcomes by identifying high-risk claims early and guiding optimal provider selection for improved cost control and faster resolution.',
        cta: 'See our printing facility tour',
        image: '../../../assets/images/C_Claim_managements.png'
      },
      {
        title: 'Medical & Pharmacy Management',
        description:
          'Our integrated medical management solutions help control costs while ensuring injured workers receive appropriate, timely care. A centralized workbench equips nurse case managers and medical bill reviewers with decision-support tools for utilization review, treatment plan oversight, and seamless managed care network integration. Automated medical bill review reprices claims against state fee schedules and contracts to ensure accuracy and compliance, while pharmacy benefits management optimizes drug spend through formulary controls and utilization monitoring. Integrated IME and case management coordination further streamlines scheduling, reporting, and outcome tracking across the care lifecycle.',
        cta: 'Learn more',
       image: '../../../assets/images/C_Medical & Pharmacy Management.png'
      },
      {
        title: 'Litigation & Investigative Services',
        description:
          "Our litigation management workbench streamlines disputed claims by enabling collaboration between defense attorneys and claims adjusters on case strategy, document management, and settlement negotiation. Automated demand letter processing captures critical data, drives timely workflows, and integrates with case management systems to provide full visibility into litigation costs and outcomes for informed, data-driven settlement decisions.Integrated investigative services strengthen fraud prevention across the claims lifecycle. Seamless SIU and investigative database integrations enable rapid fraud indicator detection and case referral, while configurable fraud rules and comprehensive reporting support regulatory compliance and deliver actionable insights into fraud trends and prevention effectiveness.",
        cta: 'Learn more about bill presentment',
         image: '../../../assets/images/C_Litigation Management.png'
      },
       {
        title: 'Regulatory Compliance & Technology',
        description:
          'Our technology-enabled regulatory solutions help carriers, self-insureds, MGAs, and TPAs confidently navigate complex state and federal requirements while reducing administrative burden. A centralized regulatory workbench delivers analytics-driven compliance oversight, exception reporting, and jurisdictional deadline tracking. Seamless data integration connects core systems to regulatory portals with automated validation and error resolution, while continuous compliance monitoring keeps you ahead of regulatory changes through impact assessment and tailored implementation guidance.',
        cta: 'Discover our channel capabilities',
        image: '../../../assets/images/C_Regulator & Compliance.png'
      },
       {
        title: 'Claims Regulatory Reporting',
        description:
          'Our claims regulatory reporting solutions deliver comprehensive EDI compliance across all jurisdictions, including full IAIABC support for FROI and SROI filings with automated validation, error correction, and resubmission workflows. Unitstat reporting aggregates multi-state statistical data for submission to rating bureaus and regulatory agencies, while specialized medical and pharmacy reporting ensures adherence to state-specific requirements. Integrated fraud and SIU reporting supports regulatory mandates, and full CMS compliance—including Medicare Secondary Payer and Section 111 reporting—ensures accurate, timely submissions with complete audit trails.',
        cta: 'Discover our channel capabilities',
        image: '../../../assets/images/C_Claims Management.png'
      },
       {
        title: 'Policy Regulatory Services',
        description:
          'Our policy regulatory services ensure compliance with proof of coverage and policy reporting requirements across all jurisdictions. Automated certificate of insurance generation and WCPOLS reporting support accurate, timely filings, while lifecycle management tracks policy events—including cancellations, reinstatements, and changes—with automated notifications to meet regulatory deadlines. Flexible, role-based workflows support carriers, MGAs, and TPAs, accommodating entity-specific compliance needs across diverse operating models. Beyond reporting, we proactively monitor regulatory changes and partner with your team to implement required system and process updates, helping you stay ahead of evolving compliance obligations.',
        cta: 'Discover our channel capabilities',
         image: '../../../assets/images/C_Regulator & Compliance.png'
      },
       {
        title: 'Regulatory Filing & Audit Support',
        description:
          'Our regulatory filing and audit support services streamline rate, rule, and form filings across all jurisdictions through coordinated submission strategies and dependency mapping that reduce regulatory delays. We work closely with SERFF, state-specific portals, advisory organizations, and filing vendors to manage submissions, track filings, handle agency correspondence, and monitor approvals end to end. During market conduct examinations and regulatory audits, our team provides expert support including data extraction, report generation, and documentation preparation. We deliver accurate, comprehensive responses to regulatory inquiries, helping you navigate examinations efficiently while minimizing operational disruption and ensuring compliance with documentation standards.',
        cta: 'Discover our channel capabilities',
        image: '../../../assets/images/C_Audit.png'
      },
    ]
    };
}