
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { 
  TextField, 
  TextareaField, 
  SelectField, 
  RadioButtonGroup,
  ImageUploadField,
  ActionButtons
} from '@/components/FormFields';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-8 animate-fade-in">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Submit Form' }
          ]} 
        />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Form Submission</h1>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField 
                label="Product Name" 
                name="productName" 
                placeholder="Enter product name" 
                required 
                tooltip="Enter the full name of your product"
              />
              
              <SelectField 
                label="Category" 
                name="category" 
                required 
                options={[
                  { value: 'electronics', label: 'Electronics' },
                  { value: 'clothing', label: 'Clothing' },
                  { value: 'home', label: 'Home & Kitchen' }
                ]}
              />
              
              <div className="md:col-span-2">
                <TextareaField 
                  label="Description" 
                  name="description" 
                  placeholder="Enter product description" 
                  required 
                />
              </div>
              
              <TextField 
                label="Price" 
                name="price" 
                placeholder="Enter price" 
                required 
              />
              
              <TextField 
                label="Quantity" 
                name="quantity" 
                placeholder="Enter quantity" 
                required 
              />
              
              <RadioButtonGroup 
                label="Availability" 
                name="availability" 
                required 
                options={[
                  { value: 'instock', label: 'In Stock' },
                  { value: 'outofstock', label: 'Out of Stock' },
                  { value: 'preorder', label: 'Pre-order' }
                ]}
              />
              
              <SelectField 
                label="Brand" 
                name="brand" 
                options={[
                  { value: 'apple', label: 'Apple' },
                  { value: 'samsung', label: 'Samsung' },
                  { value: 'google', label: 'Google' }
                ]}
              />
              
              <div className="md:col-span-2">
                <ImageUploadField 
                  label="Product Image" 
                  name="productImage" 
                  required 
                />
              </div>
              
              <div className="md:col-span-2">
                <TextField 
                  label="YouTube Video" 
                  name="youtubeVideo" 
                  placeholder="https://www.youtube.com/watch?v=..." 
                />
              </div>
            </div>
            
            <ActionButtons />
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
