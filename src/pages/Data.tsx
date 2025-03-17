
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, Briefcase, DollarSign, MapPin, IdCard, Network, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const Data = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Data Sources</h1>
      <p className="text-gray-600 mb-6">
        Connect and manage external data sources for identity verification and fraud prevention.
      </p>
      <Separator className="my-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Data Sources */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-blue-500" />
              <CardTitle className="text-lg">Phone Basic</CardTitle>
            </div>
            <CardDescription>Phone number validation, carrier data, line type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-indigo-500" />
              <CardTitle className="text-lg">Phone Social</CardTitle>
            </div>
            <CardDescription>Social profiles, usage patterns, reputation data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>

        {/* Email Data Sources */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-blue-500" />
              <CardTitle className="text-lg">Email Basic</CardTitle>
            </div>
            <CardDescription>Email validation, domain info, deliverability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-indigo-500" />
              <CardTitle className="text-lg">Email Social</CardTitle>
            </div>
            <CardDescription>Linked social accounts, registration info, reputation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>

        {/* Employment & Income */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-purple-500" />
              <CardTitle className="text-lg">Employment</CardTitle>
            </div>
            <CardDescription>Employment verification, work history, position</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Available</span>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-green-500" />
              <CardTitle className="text-lg">Income</CardTitle>
            </div>
            <CardDescription>Income verification, bank transaction analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Available</span>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
          </CardContent>
        </Card>

        {/* IP & Identity */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-red-500" />
              <CardTitle className="text-lg">IP Intelligence</CardTitle>
            </div>
            <CardDescription>Geolocation, proxy detection, risk scoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <IdCard className="h-5 w-5 mr-2 text-amber-500" />
              <CardTitle className="text-lg">Identity</CardTitle>
            </div>
            <CardDescription>ID document verification, biometric matching</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>

        {/* Network Graph */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <Network className="h-5 w-5 mr-2 text-blue-600" />
              <CardTitle className="text-lg">Network Graph</CardTitle>
            </div>
            <CardDescription>Connections between users, entities, transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </CardContent>
        </Card>

        {/* Add Global Security Data */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 mr-2 text-gray-500" />
              <CardTitle className="text-lg">Global Security Data</CardTitle>
            </div>
            <CardDescription>Sanctions lists, PEP screening, adverse media</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Available</span>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Data
