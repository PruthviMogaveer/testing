import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <Input
    placeholder="Search leads..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full"
  />
);

export default SearchBar;
