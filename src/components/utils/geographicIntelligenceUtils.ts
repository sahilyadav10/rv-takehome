import { mockDeals, stateToTerritoryMap } from "../../lib/data/mockData";
import {
  GeographicInsight,
  TerritoryCoverage,
} from "../app/geographic-intelligence/types";

export const getSuggestedTerritory = (city: string, state: string): string => {
  return stateToTerritoryMap[state] || "Unassigned";
};

export const generateGeographicInsights = (
  sortBy: "deals" | "value" | "avgValue" = "deals"
): GeographicInsight[] => {
  const cityMap = new Map<string, GeographicInsight>();

  mockDeals.forEach((deal) => {
    const originKey = `${deal.origin_city}, ${
      deal.origin_city.split(" ").pop() || ""
    }`;
    const destKey = `${deal.destination_city}, ${
      deal.destination_city.split(" ").pop() || ""
    }`;

    // Process origin city
    if (!cityMap.has(originKey)) {
      cityMap.set(originKey, {
        city: deal.origin_city,
        state: deal.origin_city.split(" ").pop() || "",
        dealCount: 0,
        totalValue: 0,
        avgValue: 0,
        territory: deal.territory?.name,
      });
    }
    const originInsight = cityMap.get(originKey)!;
    originInsight.dealCount++;
    originInsight.totalValue += deal.value;

    // Process destination city
    if (!cityMap.has(destKey)) {
      cityMap.set(destKey, {
        city: deal.destination_city,
        state: deal.destination_city.split(" ").pop() || "",
        dealCount: 0,
        totalValue: 0,
        avgValue: 0,
        territory: deal.territory?.name,
      });
    }
    const destInsight = cityMap.get(destKey)!;
    destInsight.dealCount++;
    destInsight.totalValue += deal.value;
  });

  // Calculate averages and add territory suggestions
  const insights = Array.from(cityMap.values()).map((insight) => ({
    ...insight,
    avgValue: insight.totalValue / insight.dealCount,
    suggestedTerritory: getSuggestedTerritory(insight.city, insight.state),
  }));

  // Sort based on the selected criteria
  return insights.sort((a, b) => {
    switch (sortBy) {
      case "deals":
        return b.dealCount - a.dealCount;
      case "value":
        return b.totalValue - a.totalValue;
      case "avgValue":
        return b.avgValue - a.avgValue;
      default:
        return b.dealCount - a.dealCount;
    }
  });
};

export const getTerritoryCoverage = (
  insights: GeographicInsight[]
): TerritoryCoverage[] => {
  const territoryStats = new Map<
    string,
    { cities: number; deals: number; value: number }
  >();

  insights.forEach((insight) => {
    if (insight.territory) {
      if (!territoryStats.has(insight.territory)) {
        territoryStats.set(insight.territory, {
          cities: 0,
          deals: 0,
          value: 0,
        });
      }
      const stats = territoryStats.get(insight.territory)!;
      stats.cities++;
      stats.deals += insight.dealCount;
      stats.value += insight.totalValue;
    }
  });

  return Array.from(territoryStats.entries()).map(([territory, stats]) => ({
    territory,
    ...stats,
  }));
};
