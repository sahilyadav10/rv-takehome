import { Territory } from "../../lib/types/territory";

export const getTerritoryBalance = (territory: Territory) => {
  const balance = territory.current_deals - territory.target_deals;
  if (balance > 0)
    return { status: "over", value: balance, color: "text-red-600" };
  if (balance < 0)
    return {
      status: "under",
      value: Math.abs(balance),
      color: "text-yellow-600",
    };
  return { status: "balanced", value: 0, color: "text-green-600" };
};
