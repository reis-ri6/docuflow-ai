import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cx } from '../../utils/classNames';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={cx('flex items-center gap-2 text-sm', className)} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="text-system-text-secondary hover:text-variant-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cx(
                  isLast ? 'text-system-text-primary font-semibold' : 'text-system-text-tertiary'
                )}
              >
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight size={14} className="text-system-text-tertiary" />}
          </div>
        );
      })}
    </nav>
  );
}