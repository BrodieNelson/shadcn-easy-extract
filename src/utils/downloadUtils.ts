
/**
 * Utility functions for downloading project files
 */

// Create a zip file containing the essential project files
export const downloadProjectFiles = async () => {
  try {
    // A function to fetch all necessary UI components, config files and utilities
    const files = [
      // Core UI components
      { path: 'components/ui/button.tsx', content: await fetchFileContent('ui/button') },
      { path: 'components/ui/tooltip.tsx', content: await fetchFileContent('ui/tooltip') },
      { path: 'components/ui/toast.tsx', content: await fetchFileContent('ui/toast') },
      { path: 'components/ui/toaster.tsx', content: await fetchFileContent('ui/toaster') },
      // Configuration
      { path: 'tailwind.config.ts', content: await fetchFileContent('config/tailwind') },
      { path: 'components.json', content: await fetchFileContent('config/components') },
      // Utilities
      { path: 'lib/utils.ts', content: await fetchFileContent('utils/lib') },
      { path: 'hooks/use-toast.ts', content: await fetchFileContent('hooks/toast') },
      // CSS
      { path: 'index.css', content: await fetchFileContent('styles/index') },
      // README
      { path: 'README.md', content: await fetchFileContent('docs/readme') }
    ];

    // Generate a zip file
    const { default: JSZip } = await import('jszip');
    const zip = new JSZip();
    
    // Add all files to the zip
    files.forEach(file => {
      zip.file(file.path, file.content);
    });
    
    // Add readme with instructions
    zip.file('README.md', `
# Shadcn UI Starter Kit

This package contains all the necessary components and configuration to start building with Shadcn UI.

## Getting Started

1. Install dependencies:
\`\`\`
npm install tailwindcss postcss autoprefixer @radix-ui/react-toast @radix-ui/react-tooltip class-variance-authority clsx tailwind-merge
\`\`\`

2. Initialize Tailwind CSS:
\`\`\`
npx tailwindcss init -p
\`\`\`

3. Copy the files from this package to your project structure

4. Import components as needed in your project

## Documentation

For full documentation, visit [https://ui.shadcn.com](https://ui.shadcn.com)
    `);
    
    // Generate and download the zip
    const content = await zip.generateAsync({ type: 'blob' });
    const url = window.URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'shadcn-ui-starter-kit.zip');
    
    // Append to the document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    console.log('Download completed');
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    
    // Fallback to text file if zip creation fails
    const mockZipContent = `
This is a simulated download of the Shadcn UI starter kit.
In a production environment, this would be an actual ZIP file containing:

- All UI components (button.tsx, tooltip.tsx, toast.tsx, etc.)
- Tailwind configuration with the exact theme settings used on this site
- Components.json configuration
- Utility functions (cn, toast hooks, etc.)
- Theme setup with the pink accent colors
- TypeScript types for all components

Visit https://ui.shadcn.com to learn how to install these components manually.
    `;
    
    // Create a Blob from the content
    const blob = new Blob([mockZipContent], { type: 'text/plain' });
    
    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'shadcn-ui-starter-kit.txt');
    
    // Append to the document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    console.log('Fallback download initiated');
    return false;
  }
};

// Fetch file content (in a real implementation, this would fetch actual file content)
const fetchFileContent = async (fileId: string) => {
  // This would normally fetch the actual file content from a server
  // For this demo, we're returning mock content based on the file ID
  
  const fileContents: Record<string, string> = {
    'ui/button': `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)`,
    'ui/tooltip': `import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }`,
    'ui/toast': `// Toast component code from shadcn/ui`,
    'ui/toaster': `// Toaster component code from shadcn/ui`,
    'config/tailwind': `/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pink: {
          DEFAULT: "#FF3D71",
          50: "#FFEBF0",
          100: "#FFD6E1",
          200: "#FFADC3",
          300: "#FF85A5",
          400: "#FF5C87",
          500: "#FF3D71",
          600: "#FF0A4B",
          700: "#D60035",
          800: "#9E0027",
          900: "#660019",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`,
    'config/components': `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`,
    'utils/lib': `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,
    'hooks/toast': `import { Toast, toast as sonnerToast } from "sonner"

export const toast = sonnerToast

export const useToast = () => {
  return {
    toast: sonnerToast,
    dismiss: sonnerToast.dismiss,
    error: sonnerToast.error,
    success: sonnerToast.success,
    warning: sonnerToast.warning,
    info: sonnerToast.info,
    promise: sonnerToast.promise,
    custom: sonnerToast.custom,
    loading: sonnerToast.loading,
  }
}`,
    'styles/index': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    
    --primary: 345 100% 62%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 345 100% 62%;
    
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    
    --primary: 345 100% 62%;
    --primary-foreground: 0 0% 98%;
    
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 345 100% 62%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings: "ss01", "ss02", "cv01", "cv02", "cv03";
  }
}`,
    'docs/readme': `# Shadcn UI Project

This project uses shadcn/ui components with a custom pink theme.

## Getting Started

1. Install dependencies:
\`\`\`
npm install
\`\`\`

2. Run the development server:
\`\`\`
npm run dev
\`\`\`

## Features

- Fully featured Shadcn UI components
- Custom pink theme
- Responsive design
- Tailwind CSS for styling
- TypeScript for type safety

## Documentation

For more information, visit [https://ui.shadcn.com](https://ui.shadcn.com)
`
  };

  return fileContents[fileId] || '// File content not available';
};
