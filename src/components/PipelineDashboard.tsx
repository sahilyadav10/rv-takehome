import React from "react";
import DealList from "./app/pipeline-dashboard/DealList";
import PerformanceMetrics from "./app/pipeline-dashboard/PerformanceMetrics";
import PipelineFunnel from "./app/pipeline-dashboard/PipelineFunnel";
import DashboardLayout from "./layout/DashboardLayout";

const PipelineDashboard: React.FC = () => {
  return (
    <DashboardLayout
      title="Pipeline Analytics Dashboard"
      description="Monitor pipeline performance and deal progression"
    >
      <div className="flex flex-col gap-6">
        {/* Pipeline Overview Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Pipeline Overview
          </h2>
          <PipelineFunnel />
        </div>

        {/* Performance Metrics Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Performance Metrics
          </h2>
          <PerformanceMetrics />
        </div>

        {/* Deal List Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Deal List
          </h2>
          <DealList />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PipelineDashboard;
