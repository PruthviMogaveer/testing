import { Card, CardHeader, CardContent } from '@/components/ui/card';

const Dashboard = () => (
  <Card className="mb-6 p-4">
    <CardHeader className="pb-2">
      <h2 className="text-xl font-bold">Hi Daniel,</h2>
      <p className="text-gray-600">With Search Assistant, we've reviewed:</p>
    </CardHeader>
    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <div className="text-3xl font-bold text-blue-600">320</div>
        <div className="text-sm text-gray-600">Leads in your states</div>
      </div>
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <div className="text-3xl font-bold text-blue-600">270</div>
        <div className="text-sm text-gray-600">Different brokers</div>
      </div>
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <div className="text-3xl font-bold text-blue-600">85</div>
        <div className="text-sm text-gray-600">Matched leads</div>
      </div>
    </CardContent>
  </Card>
);

export default Dashboard;
