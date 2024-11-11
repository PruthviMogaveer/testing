import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const LeadCard = ({ lead, expanded, onToggle }) => {
  const scoreColor = lead.score >= 8 ? 'text-green-600' : lead.score <= 4 ? 'text-red-600' : 'text-blue-600';

  return (
    <Card className="mb-4 overflow-hidden">
      <div className="p-4 cursor-pointer" onClick={onToggle}>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-bold">{lead.title}</h3>
            <div className="text-sm text-gray-600">{lead.location} • {lead.industry}</div>
            <div className="text-sm">
              <span>Rev: ${lead.financials.revenue}</span> • <span>Margin: {lead.financials.margin}%</span>
            </div>
          </div>
          <Button variant="outline" size="sm">{lead.status === "For Review" ? "Request" : "Update"}</Button>
        </div>
      </div>
      {expanded && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-600">{lead.summary}</p>
        </div>
      )}
    </Card>
  );
};

export default LeadCard;
