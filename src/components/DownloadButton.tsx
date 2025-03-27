
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { downloadProjectFiles } from '@/utils/downloadUtils';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface DownloadButtonProps {
  className?: string;
}

const DownloadButton = ({ className }: DownloadButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            onClick={downloadProjectFiles}
            variant="default" 
            size="lg"
            className={`bg-pink-500 hover:bg-pink-600 ${className}`}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Starter Kit
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Download the complete shadcn UI starter kit with all components and configuration</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DownloadButton;
