import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import LeadCard from '../components/LeadCard';
import ViewToggle from '../components/ViewToggle';
import SearchBar from '../components/SearchBar';
import SortButton from '../components/SortButton';
import FilterModal from '../components/FilterModal';
import demoLeads from '../data/leadsData';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

const SearchAssistant = () => {
  const [view, setView] = useState("toReview");  // "toReview" or "active"
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("score");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({ status: '', daysListed: '' });

  // Filter and sort the leads based on view, search term, sort option, and filters
  const filteredLeads = demoLeads
    .filter(lead => 
      (view === "toReview" ? ["For Review", "To Review"].includes(lead.status) : lead.status === "Active Lead") // View filtering
    )
    .filter(lead => 
      lead.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(lead => 
      // Apply filters only for Active Leads
      (view === "active" ? 
        (filters.status ? lead.status === filters.status : true) &&
        (filters.daysListed ? lead.broker.daysListed <= parseInt(filters.daysListed) : true)
      : true) // No filtering for "To Review" leads
    )
    .sort((a, b) => 
      sortOption === "score" ? b.score - a.score :
      sortOption === "newest" ? b.broker.daysListed - a.broker.daysListed :
      a.broker.daysListed - b.broker.daysListed
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Dashboard />
      <ViewToggle view={view} setView={setView} />
      <div className="flex gap-4 mb-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortButton setSortOption={setSortOption} />
        {/* Only show Filter Button when in "Active Leads" view */}
        {view === "active" && (
            <Button variant="outline"
            onClick={() => setIsFilterOpen(true)}
            >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filter
          </Button>

        )}
      </div>
      <div className="space-y-4">
        {filteredLeads.map(lead => (
          <LeadCard
            key={lead.id}
            lead={lead}
            expanded={expandedId === lead.id}
            onToggle={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
          />
        ))}
      </div>

      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        setFilters={setFilters} 
      />
    </div>
  );
};

export default SearchAssistant;
