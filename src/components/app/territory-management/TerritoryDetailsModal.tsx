import { ReactNode } from "react";
import { Territory } from "../../../lib/types/territory";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: string;
  showCloseButton?: boolean;
}

function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-2xl",
  showCloseButton = true,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg p-6 w-full mx-4 max-h-[80vh] overflow-y-auto ${maxWidth}`}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className="flex justify-between items-center mb-4">
            {title && (
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

interface TerritoryDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  territory: Territory | null;
}

export default function TerritoryDetailsModal({
  isOpen,
  onClose,
  territory,
}: TerritoryDetailsModalProps) {
  if (!territory) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${territory.name} Territory Details`}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Region
            </label>
            <p className="mt-1 text-sm text-gray-900">{territory.region}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target Deals
            </label>
            <p className="mt-1 text-sm text-gray-900">
              {territory.target_deals}
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sales Representatives
          </label>
          <div className="space-y-2">
            {territory.sales_reps.map((rep) => (
              <div
                key={rep.id}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
              >
                <span className="text-sm">{rep.name}</span>
                <span className="text-xs text-gray-500">
                  {rep.deals.length} deals
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Recent Deals
          </label>
          <div className="space-y-2">
            {territory.deals.slice(0, 5).map((deal) => (
              <div
                key={deal.id}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
              >
                <div>
                  <span className="text-sm font-medium">
                    {deal.company_name}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    ${deal.value.toLocaleString()}
                  </span>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    deal.stage === "Closed Won"
                      ? "bg-green-100 text-green-800"
                      : deal.stage === "Closed Lost"
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {deal.stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
