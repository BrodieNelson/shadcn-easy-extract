
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { HelpCircle, Upload } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TextFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  tooltip?: string;
  className?: string;
}

export const TextField = ({ label, name, placeholder, required = false, tooltip, className }: TextFieldProps) => {
  return (
    <div className={`form-group ${className}`}>
      <div className="form-label">
        {required && <span className="text-pink-500 mr-1">*</span>}
        {label}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <Input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        className="input-field"
        required={required}
      />
    </div>
  );
};

export const TextareaField = ({ label, name, placeholder, required = false, tooltip, className }: TextFieldProps) => {
  return (
    <div className={`form-group ${className}`}>
      <div className="form-label">
        {required && <span className="text-pink-500 mr-1">*</span>}
        {label}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="input-field min-h-[100px]"
        required={required}
      />
      <div className="flex justify-end mt-1 text-xs text-gray-500">
        <span>0 / 1200</span>
      </div>
    </div>
  );
};

interface SelectFieldProps extends TextFieldProps {
  options: { value: string; label: string }[];
}

export const SelectField = ({ label, name, required = false, tooltip, options, className }: SelectFieldProps) => {
  return (
    <div className={`form-group ${className}`}>
      <div className="form-label">
        {required && <span className="text-pink-500 mr-1">*</span>}
        {label}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <Select name={name}>
        <SelectTrigger className="input-field">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export const RadioButtonGroup = ({ label, name, required = false, tooltip, options, className }: SelectFieldProps) => {
  return (
    <div className={`form-group ${className}`}>
      <div className="form-label">
        {required && <span className="text-pink-500 mr-1">*</span>}
        {label}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <RadioGroup name={name} className="flex space-x-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={`${name}-${option.value}`} />
            <Label htmlFor={`${name}-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export const ImageUploadField = ({ label, name, required = false, tooltip, className }: TextFieldProps) => {
  return (
    <div className={`form-group ${className}`}>
      <div className="form-label">
        {required && <span className="text-pink-500 mr-1">*</span>}
        {label}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="border-2 border-dashed border-gray-200 rounded-md p-6 text-center">
        <div className="flex flex-col items-center">
          <Upload className="h-8 w-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500 mb-2">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max 2MB)</p>
          <Input 
            type="file" 
            id={name} 
            name={name} 
            className="hidden" 
            required={required}
            accept="image/*"
          />
          <Button 
            type="button" 
            variant="outline" 
            className="mt-4" 
            onClick={() => document.getElementById(name)?.click()}
          >
            Select File
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ActionButtons = () => {
  return (
    <div className="flex space-x-3 mt-8">
      <Button variant="outline" className="w-full" type="button">
        Cancel
      </Button>
      <Button className="w-full bg-pink-500 hover:bg-pink-600" type="submit">
        Submit
      </Button>
    </div>
  );
};
