import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

const SortButton = ({ setSortOption }) => {
  const [open, setOpen] = useState(false);

  const handleSortChange = (option) => {
    setSortOption(option);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Sort
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48">
        <DropdownMenuItem onClick={() => handleSortChange('score')}>Sort by Score</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSortChange('newest')}>Newest First</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSortChange('oldest')}>Oldest First</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortButton;
