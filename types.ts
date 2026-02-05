
export type Page = 'dashboard' | 'inventory' | 'pos' | 'invoices' | 'reports';

export interface Category {
  id: string;
  name: string;
  subcategories?: Category[];
  attributes?: string[];
  filters?: string[];
}

export interface SummaryData {
  label: string;
  value: string;
  color: string;
  bg: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}
