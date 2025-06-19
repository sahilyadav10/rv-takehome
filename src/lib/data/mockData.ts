import { Territory, SalesRep, Deal } from "../types/territory";

// State to territory mapping
export const stateToTerritoryMap: { [key: string]: string } = {
  NY: "Northeast",
  MA: "Northeast",
  PA: "Northeast",
  GA: "Southeast",
  FL: "Southeast",
  NC: "Southeast",
  TN: "Southeast",
  IL: "Midwest",
  MI: "Midwest",
  MN: "Midwest",
  MO: "Midwest",
  TX: "Southwest",
  AZ: "Southwest",
  NM: "Southwest",
  CA: "West",
  WA: "West",
  OR: "West",
};

// Mock territories
export const mockTerritories: Territory[] = [
  {
    id: 1,
    name: "Northeast",
    region: "Northeast",
    target_deals: 50,
    current_deals: 45,
    sales_reps: [],
    deals: [],
  },
  {
    id: 2,
    name: "Southeast",
    region: "Southeast",
    target_deals: 45,
    current_deals: 38,
    sales_reps: [],
    deals: [],
  },
  {
    id: 3,
    name: "Midwest",
    region: "Midwest",
    target_deals: 40,
    current_deals: 42,
    sales_reps: [],
    deals: [],
  },
  {
    id: 4,
    name: "Southwest",
    region: "Southwest",
    target_deals: 35,
    current_deals: 28,
    sales_reps: [],
    deals: [],
  },
  {
    id: 5,
    name: "West",
    region: "West",
    target_deals: 55,
    current_deals: 52,
    sales_reps: [],
    deals: [],
  },
];

// Mock sales reps
export const mockSalesReps: SalesRep[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "(555) 123-4567",
    territory_id: 1,
    deals: [],
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike.chen@company.com",
    phone: "(555) 234-5678",
    territory_id: 1,
    deals: [],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@company.com",
    phone: "(555) 345-6789",
    territory_id: 2,
    deals: [],
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@company.com",
    phone: "(555) 456-7890",
    territory_id: 2,
    deals: [],
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@company.com",
    phone: "(555) 567-8901",
    territory_id: 3,
    deals: [],
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james.wilson@company.com",
    phone: "(555) 678-9012",
    territory_id: 3,
    deals: [],
  },
  {
    id: 7,
    name: "Maria Garcia",
    email: "maria.garcia@company.com",
    phone: "(555) 789-0123",
    territory_id: 4,
    deals: [],
  },
  {
    id: 8,
    name: "Robert Lee",
    email: "robert.lee@company.com",
    phone: "(555) 890-1234",
    territory_id: 4,
    deals: [],
  },
  {
    id: 9,
    name: "Jennifer Davis",
    email: "jennifer.davis@company.com",
    phone: "(555) 901-2345",
    territory_id: 5,
    deals: [],
  },
  {
    id: 10,
    name: "Christopher Brown",
    email: "christopher.brown@company.com",
    phone: "(555) 012-3456",
    territory_id: 5,
    deals: [],
  },
];

// Mock deals with realistic data
export const mockDeals: Deal[] = [
  {
    id: 1,
    deal_id: "DEAL-001",
    company_name: "TechCorp Solutions",
    value: 75000,
    stage: "Qualified",
    origin_city: "New York",
    destination_city: "Boston",
    sales_rep: "Sarah Johnson",
    territory_id: 1,
    created_date: "2024-01-15",
    expected_close_date: "2024-03-15",
    audit_trail: [
      {
        id: 1,
        action: "Created",
        user: "System",
        timestamp: "2024-01-15T10:00:00Z",
        details: "Deal created and assigned to Northeast territory",
      },
    ],
  },
  {
    id: 2,
    deal_id: "DEAL-002",
    company_name: "Global Manufacturing Inc",
    value: 125000,
    stage: "Proposal",
    origin_city: "Atlanta",
    destination_city: "Miami",
    sales_rep: "Emily Rodriguez",
    territory_id: 2,
    created_date: "2024-01-20",
    expected_close_date: "2024-04-20",
    audit_trail: [
      {
        id: 2,
        action: "Created",
        user: "System",
        timestamp: "2024-01-20T14:30:00Z",
        details: "Deal created and assigned to Southeast territory",
      },
    ],
  },
  {
    id: 3,
    deal_id: "DEAL-003",
    company_name: "Midwest Logistics",
    value: 95000,
    stage: "Negotiation",
    origin_city: "Chicago",
    destination_city: "Detroit",
    sales_rep: "Lisa Thompson",
    territory_id: 3,
    created_date: "2024-02-01",
    expected_close_date: "2024-03-01",
    audit_trail: [
      {
        id: 3,
        action: "Created",
        user: "System",
        timestamp: "2024-02-01T09:15:00Z",
        details: "Deal created and assigned to Midwest territory",
      },
    ],
  },
  {
    id: 4,
    deal_id: "DEAL-004",
    company_name: "Texas Energy Co",
    value: 180000,
    stage: "Closed Won",
    origin_city: "Houston",
    destination_city: "Dallas",
    sales_rep: "Maria Garcia",
    territory_id: 4,
    created_date: "2024-01-10",
    expected_close_date: "2024-02-10",
    audit_trail: [
      {
        id: 4,
        action: "Created",
        user: "System",
        timestamp: "2024-01-10T11:45:00Z",
        details: "Deal created and assigned to Southwest territory",
      },
      {
        id: 5,
        action: "Closed Won",
        user: "Maria Garcia",
        timestamp: "2024-02-10T16:20:00Z",
        details: "Deal successfully closed",
      },
    ],
  },
  {
    id: 5,
    deal_id: "DEAL-005",
    company_name: "Pacific Software",
    value: 150000,
    stage: "Qualified",
    origin_city: "San Francisco",
    destination_city: "Seattle",
    sales_rep: "Jennifer Davis",
    territory_id: 5,
    created_date: "2024-02-05",
    expected_close_date: "2024-04-05",
    audit_trail: [
      {
        id: 6,
        action: "Created",
        user: "System",
        timestamp: "2024-02-05T13:20:00Z",
        details: "Deal created and assigned to West territory",
      },
    ],
  },
  {
    id: 6,
    deal_id: "DEAL-006",
    company_name: "Eastern Retail",
    value: 85000,
    stage: "Proposal",
    origin_city: "Philadelphia",
    destination_city: "Pittsburgh",
    sales_rep: "Mike Chen",
    territory_id: 1,
    created_date: "2024-01-25",
    expected_close_date: "2024-03-25",
    audit_trail: [
      {
        id: 7,
        action: "Created",
        user: "System",
        timestamp: "2024-01-25T15:10:00Z",
        details: "Deal created and assigned to Northeast territory",
      },
    ],
  },
  {
    id: 7,
    deal_id: "DEAL-007",
    company_name: "Southern Healthcare",
    value: 200000,
    stage: "Closed Won",
    origin_city: "Charlotte",
    destination_city: "Nashville",
    sales_rep: "David Kim",
    territory_id: 2,
    created_date: "2024-01-05",
    expected_close_date: "2024-02-05",
    audit_trail: [
      {
        id: 8,
        action: "Created",
        user: "System",
        timestamp: "2024-01-05T08:30:00Z",
        details: "Deal created and assigned to Southeast territory",
      },
      {
        id: 9,
        action: "Closed Won",
        user: "David Kim",
        timestamp: "2024-02-05T14:45:00Z",
        details: "Deal successfully closed",
      },
    ],
  },
  {
    id: 8,
    deal_id: "DEAL-008",
    company_name: "Central Manufacturing",
    value: 110000,
    stage: "Negotiation",
    origin_city: "Minneapolis",
    destination_city: "St. Louis",
    sales_rep: "James Wilson",
    territory_id: 3,
    created_date: "2024-02-10",
    expected_close_date: "2024-04-10",
    audit_trail: [
      {
        id: 10,
        action: "Created",
        user: "System",
        timestamp: "2024-02-10T10:20:00Z",
        details: "Deal created and assigned to Midwest territory",
      },
    ],
  },
  {
    id: 9,
    deal_id: "DEAL-009",
    company_name: "Desert Mining Corp",
    value: 165000,
    stage: "Qualified",
    origin_city: "Phoenix",
    destination_city: "Albuquerque",
    sales_rep: "Robert Lee",
    territory_id: 4,
    created_date: "2024-02-15",
    expected_close_date: "2024-05-15",
    audit_trail: [
      {
        id: 11,
        action: "Created",
        user: "System",
        timestamp: "2024-02-15T12:00:00Z",
        details: "Deal created and assigned to Southwest territory",
      },
    ],
  },
  {
    id: 10,
    deal_id: "DEAL-010",
    company_name: "Coastal Tech",
    value: 140000,
    stage: "Closed Won",
    origin_city: "Los Angeles",
    destination_city: "Portland",
    sales_rep: "Christopher Brown",
    territory_id: 5,
    created_date: "2024-01-30",
    expected_close_date: "2024-03-30",
    audit_trail: [
      {
        id: 12,
        action: "Created",
        user: "System",
        timestamp: "2024-01-30T16:45:00Z",
        details: "Deal created and assigned to West territory",
      },
      {
        id: 13,
        action: "Closed Won",
        user: "Christopher Brown",
        timestamp: "2024-03-30T11:30:00Z",
        details: "Deal successfully closed",
      },
    ],
  },
];

// Helper function to link relationships
export const linkRelationships = () => {
  // Link sales reps to territories
  mockSalesReps.forEach((rep) => {
    if (rep.territory_id) {
      const territory = mockTerritories.find((t) => t.id === rep.territory_id);
      if (territory) {
        rep.territory = territory;
        territory.sales_reps.push(rep);
      }
    }
  });

  // Link deals to territories and sales reps
  mockDeals.forEach((deal) => {
    if (deal.territory_id) {
      const territory = mockTerritories.find((t) => t.id === deal.territory_id);
      if (territory) {
        deal.territory = territory;
        territory.deals.push(deal);
      }
    }

    const salesRep = mockSalesReps.find((rep) => rep.name === deal.sales_rep);
    if (salesRep) {
      deal.sales_rep_entity = salesRep;
      salesRep.deals.push(deal);
    }
  });

  // Update current_deals count for territories
  mockTerritories.forEach((territory) => {
    territory.current_deals = territory.deals.length;
  });
};

// Initialize relationships
linkRelationships();
