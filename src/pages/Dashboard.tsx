
import { useLocation } from "react-router-dom";
import CustomerView from "@/components/dashboard/CustomerView";
import OperationsView from "@/components/dashboard/OperationsView";

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const viewMode = searchParams.get("viewMode") === "internal" ? "internal" : "customer";

  // Choose between customer-facing view and operations view based on the viewMode
  return viewMode === "customer" ? <CustomerView /> : <OperationsView />;
};

export default Dashboard;
