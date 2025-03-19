
interface NetworkInsightProps {
  riskLevel: string;
}

const NetworkInsight: React.FC<NetworkInsightProps> = ({ riskLevel }) => {
  // Determine the insight text based on the risk level
  const getNetworkInsight = () => {
    if (riskLevel === "Critical" || riskLevel === "High") {
      return "This user has connections to multiple high-risk entities. The network structure suggests unusual patterns that warrant further investigation.";
    } else if (riskLevel === "Medium") {
      return "This user has a mix of normal and potentially concerning connections. Some relationships may require additional verification.";
    } else {
      return "This user has primarily normal connections with low-risk entities. The network structure appears typical for this type of account.";
    }
  };

  return (
    <div className="space-y-1 mb-3">
      <h3 className="font-medium">Connection Graph</h3>
      <p className="text-sm text-muted-foreground mb-2">
        {getNetworkInsight()}
      </p>
      
      <div className="bg-blue-50 border border-blue-100 rounded-md p-3 text-sm">
        <div className="flex items-center mb-2">
          <div className="h-4 w-4 text-amber-500 mr-2">⚠️</div>
          <span className="font-medium">Network Analysis</span>
        </div>
        <p className="text-muted-foreground">
          Hover over entities to see risk scores and flags. Animated connections indicate high-risk relationships.
        </p>
      </div>
    </div>
  );
};

export default NetworkInsight;
