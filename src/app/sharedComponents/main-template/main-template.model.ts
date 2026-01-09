export class MainTemplateData {
  sectionOneText!: string;
  sectionTwoText!: string;
  sectionThreeText!: string;
  heroImage!: string;
  rightHeroImage!: string;
  solutionsHeading!: string;

  features!: { label: string; icon: string }[];
  industries!: { label: string; icon: string }[];
  solutions!: {
    title: string;
    description: string;
    cta: string;
    image: string;
  }[];
}