"use client";

import { useState } from "react";
import PipelineDashboard from "../components/PipelineDashboard";
import TerritoryManagement from "../components/TerritoryManagement";
import GeographicIntelligence from "../components/GeographicIntelligence";
import PerformanceComparison from "../components/PerformanceComparison";
import Navbar, { ViewType } from "../components/generic/Navbar";

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>("pipeline");

  const renderActiveView = () => {
    switch (activeView) {
      case "pipeline":
        return <PipelineDashboard />;
      case "territory":
        return <TerritoryManagement />;
      case "geographic":
        return <GeographicIntelligence />;
      case "performance":
        return <PerformanceComparison />;
      default:
        return <PipelineDashboard />;
    }
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Header */}
      <Navbar activeView={activeView} onViewChange={setActiveView} />
      {/* Main Content */}
      <main className="w-full max-w-7xl row-start-2">{renderActiveView()}</main>
    </div>
  );
}
