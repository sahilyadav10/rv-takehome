"use client";

import { useState } from "react";
import DashboardLayout from "./layout/DashboardLayout";
import {
  GeographicControls,
  TerritoryCoverage,
  GeographicInsightsTable,
  generateGeographicInsights,
  getTerritoryCoverage,
} from "./app/geographic-intelligence";
import { GeographicIntelligenceProps } from "./app/geographic-intelligence/types";

export default function GeographicIntelligence({
  className = "",
}: GeographicIntelligenceProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"deals" | "value" | "avgValue">("deals");

  // Generate data using utility functions
  const insights = generateGeographicInsights(sortBy);
  const territoryCoverage = getTerritoryCoverage(insights);

  return (
    <DashboardLayout
      title="Geographic Intelligence"
      description="Analyze geographic patterns and optimize territory coverage"
      className={className}
    >
      {/* Controls */}
      <GeographicControls
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Territory Coverage Overview */}
      <TerritoryCoverage territoryCoverage={territoryCoverage} />

      {/* Geographic Insights Table */}
      <GeographicInsightsTable
        insights={insights}
        selectedRegion={selectedRegion}
      />
    </DashboardLayout>
  );
}
