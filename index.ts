export interface FinancialProfile {
  id: string;
  name: string;
  financialScore: number;
  // Add more fields as needed
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    financialProfiles: FinancialProfile[];
}