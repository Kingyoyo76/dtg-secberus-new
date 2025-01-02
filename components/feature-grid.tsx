import { Search, Settings, LayoutGrid, Bot, FileBarChart, Workflow, LayoutDashboard, Webhook } from 'lucide-react'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string[]
}

const features: FeatureProps[] = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Data Explorer",
    description: [
      "Query all permissible data sources",
      "Save Queries and Views",
      "Share Queries and Views",
      "Export Results",
      "AI Copilot for Text-to-SQL (coming soon)"
    ]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Policy Engine",
    description: [
      "Templates for cloud configuration security",
      "Templates for cloud configuration compliance",
      "Convert queries & views to policies",
      "Apply policies to specific data scopes",
      "Share policies"
    ]
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    title: "Framework Engine",
    description: [
      "Templates for cloud configuration security",
      "Templates for cloud configuration compliance",
      "Create Frameworks for any policy groups",
      "Apply Frameworks to specific data scopes",
      "Mandate or Federate frameworks"
    ]
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Co-Pilot",
    description: [
      "Text-to-SQL AI Co-Pilot for query & policy building",
      "Intelligent assistance for compliance mapping",
      "Advanced automation capabilities",
      "Natural language processing for complex queries"
    ]
  },
  {
    icon: <FileBarChart className="w-8 h-8" />,
    title: "Reporting",
    description: [
      "Overview Report (Security/Compliance)",
      "Framework Report",
      "One-time",
      "Scheduled"
    ]
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Workflow Engine",
    description: [
      "Any Integration into your security & compliance stack",
      "Automated policy enforcement",
      "Custom workflow creation",
      "Seamless integration capabilities"
    ]
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "Dashboards",
    description: [
      "Overview Dashboard (Security/Compliance)",
      "Frameworks Dashboard",
      "Policy Violations Dashboard",
      "Real-time monitoring and alerts"
    ]
  },
  {
    icon: <Webhook className="w-8 h-8" />,
    title: "API",
    description: [
      "Leverage all functionality via API",
      "Integrate data into your Integrated, modern security & compliance stack",
      "Full programmatic access",
      "Extensive documentation"
    ]
  }
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="text-purple-600 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
            <ul className="space-y-2">
              {feature.description.map((item, idx) => (
                <li key={idx} className="text-gray-600 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

