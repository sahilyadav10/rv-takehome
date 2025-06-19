export interface GeographicIntelligenceProps {
  className?: string;
}

export interface TerritoryCoverage {
  territory: string;
  cities: number;
  deals: number;
  value: number;
}

export interface TerritoryCoverageProps {
  territoryCoverage: TerritoryCoverage[];
}

export interface GeographicInsight {
  city: string;
  state: string;
  dealCount: number;
  totalValue: number;
  avgValue: number;
  territory?: string;
  suggestedTerritory?: string;
}

export interface TerritoryOptimizationProps {
  insights: GeographicInsight[];
  uncoveredCities: GeographicInsight[];
}

export interface GeographicControlsProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  sortBy: "deals" | "value" | "avgValue";
  setSortBy: (sort: "deals" | "value" | "avgValue") => void;
}

export interface GeographicInsightsTableProps {
  insights: GeographicInsight[];
  selectedRegion: string;
}

export interface GeographicHeatmapProps {
  insights: GeographicInsight[];
}
