import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const FilterModal = ({ isOpen, onClose, setFilters }) => {
  const [statusFilter, setStatusFilter] = useState('');
  const [daysListedFilter, setDaysListedFilter] = useState('');

  const handleApplyFilters = () => {
    setFilters({ status: statusFilter, daysListed: daysListedFilter });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <h2 className="text-xl font-bold">Filter Leads</h2>
        </DialogHeader>
        <DialogDescription>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Lead Status</label>
              <select
                className="w-full p-2 border rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="For Review">For Review</option>
                <option value="Active Lead">Active Lead</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Days Since Listed</label>
              <select
                className="w-full p-2 border rounded-md"
                value={daysListedFilter}
                onChange={(e) => setDaysListedFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="7">Last 7 Days</option>
                <option value="30">Last 30 Days</option>
                <option value="60">Last 60 Days</option>
              </select>
            </div>
          </div>
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleApplyFilters}>Apply Filters</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
