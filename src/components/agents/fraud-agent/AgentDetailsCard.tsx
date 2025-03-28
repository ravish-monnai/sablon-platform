
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

const AgentDetailsCard: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MM/dd/yyyy, h:mm:ss a");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Agent Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-1">Agent Name</h3>
          <p className="text-sm">Fraud Review Agent</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-1">Last Update</h3>
          <p className="text-sm">{formattedDate}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-1">Mission</h3>
          <p className="text-sm">
            El Agente de Revisión de Fraude detecta y analiza actividades sospechosas durante el procesamiento de transacciones. 
            Utiliza análisis de datos avanzado para identificar patrones anómalos y reducir falsos positivos.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentDetailsCard;
