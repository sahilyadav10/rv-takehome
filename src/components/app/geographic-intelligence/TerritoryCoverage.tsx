import { TerritoryCoverageProps } from "./types";

export default function TerritoryCoverage({
  territoryCoverage,
}: TerritoryCoverageProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">
        Territory Coverage
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {territoryCoverage.map(({ territory, cities, deals, value }) => (
          <div
            key={territory}
            className="border border-neutral-200 rounded-lg p-4"
          >
            <h3 className="font-semibold text-neutral-900 mb-2">{territory}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-600">Cities Covered:</span>
                <span className="font-medium">{cities}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Total Deals:</span>
                <span className="font-medium">{deals}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Total Value:</span>
                <span className="font-medium">${value.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
