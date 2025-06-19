"use client";

export type ViewType = "pipeline" | "territory" | "geographic" | "performance";

interface NavbarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function Navbar({ activeView, onViewChange }: NavbarProps) {
  const views = [
    { id: "pipeline" as const, label: "Pipeline Dashboard", icon: "📊" },
    { id: "territory" as const, label: "Territory Management", icon: "🗺️" },
    { id: "geographic" as const, label: "Geographic Intelligence", icon: "🌍" },
    { id: "performance" as const, label: "Performance Comparison", icon: "📈" },
  ] as const;

  return (
    <header className="w-full max-w-7xl">
      {/* Navigation Tabs */}
      <nav className="border-b border-gray-200">
        <div className="flex space-x-8 overflow-x-auto">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => onViewChange(view.id)}
              className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 whitespace-nowrap transition-colors ${
                activeView === view.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <span>{view.icon}</span>
              {view.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
