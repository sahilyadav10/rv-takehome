import { mockTerritories } from "../../../lib/data/mockData";
import { GeographicControlsProps } from "./types";

export default function GeographicControls({
  selectedRegion,
  setSelectedRegion,
  sortBy,
  setSortBy,
}: GeographicControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Region Filter
        </label>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="border border-neutral-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="all">All Regions</option>
          {mockTerritories.map((territory) => (
            <option key={territory.id} value={territory.name}>
              {territory.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "deals" | "value" | "avgValue")
          }
          className="border border-neutral-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="deals">Number of Deals</option>
          <option value="value">Total Value</option>
          <option value="avgValue">Average Deal Value</option>
        </select>
      </div>
    </div>
  );
}
