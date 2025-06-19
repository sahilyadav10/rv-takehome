import React, { useEffect } from "react";

interface DashboardLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function DashboardLayout({
  title,
  description,
  children,
  className = "",
}: DashboardLayoutProps) {
  useEffect(() => {
    if (title) {
      document.title = title + " | Revenue Vessel";
    }
  }, [title]);

  return (
    <div className={`bg-neutral-50 p-6 ${className}`}>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">{title}</h1>
        {description && <p className="text-neutral-600">{description}</p>}
      </div>
      {children}
    </div>
  );
}
