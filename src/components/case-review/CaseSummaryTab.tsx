
import CaseOverviewCard from "./case-summary/CaseOverviewCard";
import CaseInfoCard from "./case-summary/CaseInfoCard";

interface CaseSummaryTabProps {
  caseData: any;
}

const CaseSummaryTab = ({ caseData }: CaseSummaryTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Case Overview card */}
      <div className="lg:col-span-2">
        <CaseOverviewCard caseData={caseData} />
      </div>

      {/* Case Info card */}
      <CaseInfoCard caseData={caseData} />
    </div>
  );
};

export default CaseSummaryTab;
