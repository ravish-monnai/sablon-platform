
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, Briefcase, DollarSign, MapPin, IdCard, Network, ShieldCheck, Plus, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewDataSourceDialog } from "@/components/data/NewDataSourceDialog"
import { DataSourceConfigDialog } from "@/components/data/DataSourceConfigDialog"

const Data = () => {
  const [newSourceDialogOpen, setNewSourceDialogOpen] = useState(false)
  const [configDialogOpen, setConfigDialogOpen] = useState(false)
  const [selectedDataSource, setSelectedDataSource] = useState<{
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    active: boolean;
    type: string;
  } | undefined>(undefined)

  const dataSources = [
    {
      id: "phone-basic",
      name: "Phone Basic",
      description: "Phone number validation, carrier data, line type",
      icon: <Phone className="h-5 w-5 mr-2 text-blue-500" />,
      active: true,
      type: "Phone Basic"
    },
    {
      id: "phone-social",
      name: "Phone Social",
      description: "Social profiles, usage patterns, reputation data",
      icon: <Phone className="h-5 w-5 mr-2 text-indigo-500" />,
      active: true,
      type: "Phone Social"
    },
    {
      id: "email-basic",
      name: "Email Basic",
      description: "Email validation, domain info, deliverability",
      icon: <Mail className="h-5 w-5 mr-2 text-blue-500" />,
      active: true,
      type: "Email Basic"
    },
    {
      id: "email-social",
      name: "Email Social",
      description: "Linked social accounts, registration info, reputation",
      icon: <Mail className="h-5 w-5 mr-2 text-indigo-500" />,
      active: true,
      type: "Email Social"
    },
    {
      id: "employment",
      name: "Employment",
      description: "Employment verification, work history, position",
      icon: <Briefcase className="h-5 w-5 mr-2 text-purple-500" />,
      active: false,
      type: "Employment"
    },
    {
      id: "income",
      name: "Income",
      description: "Income verification, bank transaction analysis",
      icon: <DollarSign className="h-5 w-5 mr-2 text-green-500" />,
      active: false,
      type: "Income"
    },
    {
      id: "ip-intelligence",
      name: "IP Intelligence",
      description: "Geolocation, proxy detection, risk scoring",
      icon: <MapPin className="h-5 w-5 mr-2 text-red-500" />,
      active: true,
      type: "IP Intelligence"
    },
    {
      id: "identity",
      name: "Identity",
      description: "ID document verification, biometric matching",
      icon: <IdCard className="h-5 w-5 mr-2 text-amber-500" />,
      active: true,
      type: "Identity"
    },
    {
      id: "network-graph",
      name: "Network Graph",
      description: "Connections between users, entities, transactions",
      icon: <Network className="h-5 w-5 mr-2 text-blue-600" />,
      active: true,
      type: "Network Graph"
    },
    {
      id: "global-security",
      name: "Global Security Data",
      description: "Sanctions lists, PEP screening, adverse media",
      icon: <ShieldCheck className="h-5 w-5 mr-2 text-gray-500" />,
      active: false,
      type: "Global Security"
    }
  ]

  const handleConfigureClick = (dataSource) => {
    setSelectedDataSource(dataSource)
    setConfigDialogOpen(true)
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Data Sources</h1>
        <Button onClick={() => setNewSourceDialogOpen(true)}>
          <Plus className="h-5 w-5 mr-2" />
          New Data Source
        </Button>
      </div>
      
      <p className="text-gray-600 mb-6">
        Connect and manage external data sources for identity verification and fraud prevention.
      </p>
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dataSources.map((dataSource) => (
          <Card key={dataSource.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center">
                {dataSource.icon}
                <CardTitle className="text-lg">{dataSource.name}</CardTitle>
              </div>
              <CardDescription>{dataSource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className={`${dataSource.active ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} text-xs px-2 py-1 rounded`}>
                    {dataSource.active ? 'Active' : 'Available'}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleConfigureClick(dataSource)}
                >
                  {dataSource.active ? (
                    <>
                      <Settings className="h-4 w-4 mr-2" />
                      Configure
                    </>
                  ) : (
                    'Connect'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <NewDataSourceDialog 
        open={newSourceDialogOpen} 
        onOpenChange={setNewSourceDialogOpen} 
      />

      <DataSourceConfigDialog
        open={configDialogOpen}
        onOpenChange={setConfigDialogOpen}
        dataSource={selectedDataSource}
      />
    </div>
  )
}

export default Data
