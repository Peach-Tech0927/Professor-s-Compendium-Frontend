import { cn } from "@/lib/utils";
import React from "react";

export type TimelineItemType = {
  id: number;
  title: string;
  description?: string;
  time: string;
};

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.LiHTMLAttributes<HTMLDivElement> & { isEven?: boolean }
>(({ className, isEven = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative pb-8 w-full h-[200px]",
      isEven
        ? "flex flex-col items-end pl-8 pr-[60%] before:absolute before:right-[48%] before:top-4 before:h-[2px] before:w-[7%] before:h-[1px] before:mr-15 before:bg-gray-200"
        : "flex flex-col items-start pr-8 pl-[52%] before:absolute before:left-[48%] before:top-4 before:h-[2px] before:w-[7%] before:h-[1px] before:ml-15 before:bg-gray-200",
      className
    )}
    {...props}
  />
));
TimelineItem.displayName = "TimelineItem";

const TimelineHeader = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-1 flex flex-col items-start before:absolute before:left-1/2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-[#ff8888] before:px-px after:absolute after:left-1/2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-none after:bg-[#ff8888] group-last:before:hidden sm:flex-row",
      className
    )}
    {...props}
  />
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xl font-bold text-primary ml-30", className)}
    {...props}
  >
    {children}
  </div>
));
TimelineTitle.displayName = "TimelineTitle";

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-muted-foreground min-w-[300px] max-w-[400px] ml-30",
      className
    )}
    {...props}
  />
));
TimelineDescription.displayName = "TimelineDescription";

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
};
