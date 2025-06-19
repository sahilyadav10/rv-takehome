export interface Territory {
  id: number;
  name: string;
  region: string;
  target_deals: number;
  current_deals: number;
  sales_reps: SalesRep[];
  deals: Deal[];
}

export interface SalesRep {
  id: number;
  name: string;
  email: string;
  phone: string;
  territory_id: number | null;
  territory?: Territory;
  deals: Deal[];
}

export interface Deal {
  id: number;
  deal_id: string;
  company_name: string;
  value: number;
  stage: string;
  origin_city: string;
  destination_city: string;
  sales_rep: string;
  sales_rep_entity?: SalesRep;
  territory_id: number | null;
  territory?: Territory;
  created_date: string;
  expected_close_date: string;
  audit_trail: AuditEntry[];
}

export interface AuditEntry {
  id: number;
  action: string;
  user: string;
  timestamp: string;
  details: string;
}

export interface PerformanceMetrics {
  totalDeals: number;
  totalValue: number;
  avgDealValue: number;
  winRate: number;
  conversionRate: number;
  avgCycleTime: number;
  topPerformingReps: Array<{
    rep: string;
    deals: number;
    value: number;
    winRate: number;
  }>;
  dealStages: { [stage: string]: number };
  monthlyTrends: Array<{ month: string; deals: number; value: number }>;
}

export interface TerritoryComparison {
  territoryId: number;
  territoryName: string;
  metrics: PerformanceMetrics;
  rank: number;
  performanceScore: number;
}
