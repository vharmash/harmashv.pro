export interface comp {
  schemas:
  {
    'experience': {
      role: string;
      company: string;
      period: string;
      impact: string[];
      responsibilities: string[];
    };
    'summary': string[];
    'professional_experience': cv['schemas']['experience'][];
  };
}