
export const addDigitalFootprint = (caseData: any) => {
  if (!caseData.digitalFootprint) {
    caseData.digitalFootprint = {
      platforms: [
        { id: "twitter", name: "Twitter", active: true, usage: 78, lastActive: "2 days ago" },
        { id: "facebook", name: "Facebook", active: true, usage: 45, lastActive: "5 days ago" },
        { id: "instagram", name: "Instagram", active: true, usage: 92, lastActive: "1 day ago" },
        { id: "linkedin", name: "LinkedIn", active: true, usage: 60, lastActive: "3 days ago" },
        { id: "github", name: "GitHub", active: Math.random() > 0.5, usage: Math.random() > 0.7 ? 65 : 10, lastActive: "10 days ago" },
        { id: "reddit", name: "Reddit", active: Math.random() > 0.6, usage: Math.random() > 0.6 ? 55 : 15, lastActive: "7 days ago" },
        { id: "tiktok", name: "TikTok", active: Math.random() > 0.5, usage: Math.random() > 0.5 ? 88 : 5, lastActive: "4 days ago" }
      ]
    };
  }
  return caseData;
};
