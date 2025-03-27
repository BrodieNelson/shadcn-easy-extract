
import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItemProps {
  href?: string;
  children: ReactNode;
  isLast?: boolean;
}

const BreadcrumbItem = ({ href, children, isLast = false }: BreadcrumbItemProps) => {
  if (isLast) {
    return <span className="text-pink-500">{children}</span>;
  }

  return href ? (
    <a href={href} className="breadcrumb-item">
      {children}
    </a>
  ) : (
    <span>{children}</span>
  );
};

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb my-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="breadcrumb-separator h-4 w-4" />}
          <BreadcrumbItem 
            href={index < items.length - 1 ? item.href : undefined} 
            isLast={index === items.length - 1}
          >
            {item.label}
          </BreadcrumbItem>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
