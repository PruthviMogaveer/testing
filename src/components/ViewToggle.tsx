import { Button } from '@/components/ui/button';

const ViewToggle = ({ view, setView }) => (
  <div className="flex gap-4 mb-4">
    <Button variant={view === "toReview" ? "default" : "outline"} onClick={() => setView("toReview")}>To Review</Button>
    <Button variant={view === "active" ? "default" : "outline"} onClick={() => setView("active")}>Active Leads</Button>
  </div>
);

export default ViewToggle;
