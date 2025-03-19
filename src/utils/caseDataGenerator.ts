
import { journeys } from "@/pages/CaseReview";

export const generateCases = () => {
  const cases = [];
  const riskLevels = ["Low", "Medium", "High", "Critical"];
  const statuses = ["Pending Review", "Approved", "Rejected"];
  const statusColors = {
    "Pending Review": "bg-amber-100 text-amber-800",
    "Approved": "bg-green-100 text-green-800",
    "Rejected": "bg-red-100 text-red-800"
  };
  
  for (let i = 1; i <= 100; i++) {
    const journeyIndex = Math.floor(i / 20) % journeys.length;
    const journey = journeys[journeyIndex];
    
    const riskIndex = Math.floor(Math.random() * 4);
    const riskLevel = riskLevels[riskIndex];
    
    let riskScore;
    if (riskLevel === "Low") riskScore = Math.floor(Math.random() * 30) + 10;
    else if (riskLevel === "Medium") riskScore = Math.floor(Math.random() * 20) + 40;
    else if (riskLevel === "High") riskScore = Math.floor(Math.random() * 20) + 65;
    else riskScore = Math.floor(Math.random() * 15) + 85;
    
    let statusProbability;
    if (riskLevel === "Low") statusProbability = [0.2, 0.7, 0.1];
    else if (riskLevel === "Medium") statusProbability = [0.4, 0.4, 0.2];
    else if (riskLevel === "High") statusProbability = [0.6, 0.2, 0.2];
    else statusProbability = [0.7, 0.05, 0.25];
    
    const rand = Math.random();
    let statusIndex = 0;
    let sum = statusProbability[0];
    
    while (rand > sum && statusIndex < statusProbability.length - 1) {
      statusIndex++;
      sum += statusProbability[statusIndex];
    }
    
    const status = statuses[statusIndex];

    const email = `customer${i}@example.com`;
    const phone = `+1${Math.floor(Math.random() * 900) + 100}${Math.floor(Math.random() * 900) + 100}${Math.floor(Math.random() * 9000) + 1000}`;
    const ipAddress = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    const deviceId = `DEV-${Math.floor(Math.random() * 1000000)}`;
    const location = ["United States", "Canada", "United Kingdom", "Germany", "France", "Australia", "Japan", "Brazil"][Math.floor(Math.random() * 8)];
    
    const anomalyFlags = [];
    if (riskScore > 60) {
      if (Math.random() > 0.5) anomalyFlags.push("Multiple failed login attempts");
      if (Math.random() > 0.6) anomalyFlags.push("IP address mismatch");
      if (Math.random() > 0.7) anomalyFlags.push("Unusual transaction pattern");
      if (Math.random() > 0.8) anomalyFlags.push("Device not recognized");
      if (Math.random() > 0.9) anomalyFlags.push("Location inconsistency");
    }
    
    let reasoning = "";
    if (riskLevel === "Low") {
      reasoning = "The customer has a consistent usage pattern and all identity verification steps were completed successfully. The behavioral patterns match historical data, and there are no significant anomalies detected in the recent activities.";
    } else if (riskLevel === "Medium") {
      reasoning = "While most verification checks passed, there are some inconsistencies in the provided information. The customer's activity shows some deviation from typical patterns, and additional verification might be necessary to confirm legitimacy.";
    } else if (riskLevel === "High") {
      reasoning = "Multiple verification checks have failed, and the behavior pattern shows significant anomalies. The customer information has inconsistencies with our records, and the activity pattern suggests potential unauthorized access or fraudulent intent.";
    } else {
      reasoning = "Critical risk indicators have been identified, including failed verification on multiple factors, suspicious network connections, and behavior patterns consistent with known fraud schemes. Immediate attention and manual review are required.";
    }

    cases.push({
      id: `FR-2023-${1000 + i}`,
      customer: `Customer ${i}`,
      journey,
      riskLevel,
      riskScore,
      status,
      statusColor: statusColors[status],
      date: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      email,
      phone,
      ipAddress,
      deviceId,
      location,
      anomalyFlags,
      reasoning,
      emailVerified: Math.random() > 0.3,
      phoneVerified: Math.random() > 0.4,
      documents: [
        {
          type: Math.random() > 0.5 ? "Passport" : "Driver's License",
          verified: Math.random() > (riskLevel === "High" || riskLevel === "Critical" ? 0.7 : 0.3),
          score: Math.floor(Math.random() * 30) + (riskLevel === "High" || riskLevel === "Critical" ? 40 : 70)
        }
      ],
      decisionFactors: [
        {
          factor: "Identity Verification",
          score: Math.floor(Math.random() * 30) + (riskLevel === "High" || riskLevel === "Critical" ? 30 : 70),
          weight: 0.4
        },
        {
          factor: "Behavioral Analysis",
          score: Math.floor(Math.random() * 30) + (riskLevel === "High" || riskLevel === "Critical" ? 20 : 60),
          weight: 0.3
        },
        {
          factor: "Device Trust",
          score: Math.floor(Math.random() * 40) + (riskLevel === "High" || riskLevel === "Critical" ? 10 : 50),
          weight: 0.2
        },
        {
          factor: "Historical Pattern",
          score: Math.floor(Math.random() * 40) + (riskLevel === "High" || riskLevel === "Critical" ? 20 : 40),
          weight: 0.1
        }
      ]
    });
  }
  
  return cases;
};
