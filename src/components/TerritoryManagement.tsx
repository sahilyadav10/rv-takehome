"use client";

import React, { useState } from "react";
import { mockTerritories } from "../lib/data/mockData";
import { Territory } from "../lib/types/territory";
import DashboardLayout from "./layout/DashboardLayout";
import TerritoryDetailsModal from "./app/territory-management/TerritoryDetailsModal";
import { getTerritoryBalance } from "./utils/territoryManagementUtil";

export default function TerritoryManagement({ className = "" }) {
  const [selectedTerritory, setSelectedTerritory] = useState<Territory | null>(
    null
  );

  return (
    <DashboardLayout
      title="Territory Management"
      description="Manage territories, sales reps, and deal assignments"
      className={className}
    >
      {/* Tab Content */}
      <div className="min-h-[500px]">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Territories Overview
            </h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              + Add Territory
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTerritories.map((territory) => {
              const balance = getTerritoryBalance(territory);
              return (
                <div
                  key={territory.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedTerritory(territory)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {territory.name}
                    </h3>
                    <span className={`text-sm font-medium ${balance.color}`}>
                      {balance.status === "over" && "+"}
                      {balance.value} {balance.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Target Deals:</span>
                      <span className="font-medium">
                        {territory.target_deals}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Current Deals:</span>
                      <span className="font-medium">
                        {territory.current_deals}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Sales Reps:</span>
                      <span className="font-medium">
                        {territory.sales_reps.length}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min(
                            (territory.current_deals / territory.target_deals) *
                              100,
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.round(
                        (territory.current_deals / territory.target_deals) * 100
                      )}
                      % of target
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail Modals */}
      <TerritoryDetailsModal
        isOpen={!!selectedTerritory}
        onClose={() => setSelectedTerritory(null)}
        territory={selectedTerritory}
      />
    </DashboardLayout>
  );
}
