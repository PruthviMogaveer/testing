import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <Input
    placeholder="Search leads..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full"
    icon={<Search className="w-4 h-4" />}
  />
);

export default SearchBar;
