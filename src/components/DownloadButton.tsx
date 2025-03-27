
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Check, Loader2 } from 'lucide-react';
import { downloadProjectFiles } from '@/utils/downloadUtils';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';

interface DownloadButtonProps {
  className?: string;
}

const DownloadButton = ({ className }: DownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      const success = await downloadProjectFiles();
      
      if (success) {
        toast({
          title: "Download complete",
          description: "The Shadcn UI starter kit has been downloaded successfully.",
          duration: 3000,
        });
      } else {
        toast({
          title: "Using fallback download",
          description: "Could not create ZIP file. Downloaded simpler version instead.",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "There was a problem downloading the starter kit.",
        duration: 3000,
      });
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            onClick={handleDownload}
            variant="default" 
            size="lg"
            className={`bg-pink-500 hover:bg-pink-600 ${className}`}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Download className="mr-2 h-4 w-4" />
            )}
            {isDownloading ? "Downloading..." : "Download Starter Kit"}
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
