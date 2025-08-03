import { RainbowButton } from "./ui/rainbow-button";
import { Link, NotebookTabs, Share } from "lucide-react";

interface DashboardHeaderProps {
  filteredCount: number;
  filterType: string;
  isLoading: boolean;
  isGuest: boolean;
  onShare: () => void;
  onAddLink: () => void;
  onAddNote: () => void;
  onLogout: () => void;
}

export function DashboardHeader({
  filteredCount,
  filterType,
  isLoading,
  isGuest,
  onShare,
  onAddLink,
  onAddNote,
  onLogout,
}: DashboardHeaderProps) {
  return (
    <div className="sticky top-0 z-20 backdrop-blur-md bg-white/80 border-b border-slate-200/50 shadow-sm">
      <div className="p-4 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-slate-600 mt-1 text-sm md:text-base">
            {filteredCount} {filterType === "all" ? "items" : filterType} saved
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <RainbowButton
              onClick={onShare}
              variant="outline"
              size="lg"
              disabled={isGuest || isLoading}
            >
              <Share className="mr-2 h-4 w-4" />
              {isLoading ? "Sharing..." : "Share Dashboard"}
            </RainbowButton>

            <RainbowButton onClick={onAddLink}     variant="outline" size="lg">
              <Link className="mr-2 h-4 w-4" /> Add Links
            </RainbowButton>

            <RainbowButton onClick={onAddNote}     variant="outline"  size="lg">
              <NotebookTabs className="mr-2 h-4 w-4" /> Add Notes
            </RainbowButton>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-lg border border-red-200 bg-white text-red-500 font-semibold hover:bg-red-50 hover:text-red-600 transition shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
