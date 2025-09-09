import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export type TimelineItemType = {
  year: string;
  event: string;
  photo: string | null;
  period:string;
  task:string;
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
      "group relative pb-8 w-full h-[300px] sm:h-[200px]",
      "flex flex-col items-start pl-8",
      {
        "sm:pl-22 sm:pr-[60%] sm:before:absolute sm:before:right-[48%] sm:before:top-3 sm:before:h-[2px] sm:before:w-[7%] sm:before:h-[1px] sm:before:mr-15 sm:before:bg-gray-200":
          isEven,
        "sm:pr-8 sm:pl-[52%] sm:before:absolute sm:before:left-[48%] sm:before:top-3 sm:before:h-[2px] sm:before:w-[7%] sm:before:h-[1px] sm:before:ml-15 sm:before:bg-gray-200":
          !isEven,
      },
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
      "mb-1 flex flex-col items-start",
      // モバイル時は左寄せ
      "before:absolute before:left-8 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-[#ff8888] before:px-px after:absolute after:left-8 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-none after:bg-[#ff8888] group-last:before:hidden",
      // PC時は中央
      "sm:before:left-1/2 sm:after:left-1/2 sm:flex-row",
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
    className={cn("text-xl font-bold text-primary sm:ml-30", "ml-4", className)}
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
      "text-muted-foreground",
      "min-w-[250px] max-w-[300px] ml-4 sm:ml-30 sm:min-w-[300px] sm:max-w-[400px]",
      className
    )}
    {...props}
  />
));
TimelineDescription.displayName = "TimelineDescription";

const TimelineImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { src?: string }
>(({ className, src, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-4", "ml-4", "sm:ml-30 sm:mr-25 w-[300px]", className)}
    {...props}
  >
    {src && <Image src={src} alt="Timeline image" width={300} height={700} />}
  </div>
));
TimelineImage.displayName = "TimelineImage";

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineImage,
};
