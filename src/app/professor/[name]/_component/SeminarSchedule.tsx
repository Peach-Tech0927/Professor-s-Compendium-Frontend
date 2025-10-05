import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineHeader,
} from "@/components/ui/Timeline";

export const SeminarSchedule = ({
  seminarSchedule,
}: {
  seminarSchedule: {
    period: string;
    task: string;
  }[];
}) => {
  return (
    <Timeline className="mt-8">
      {seminarSchedule.map((item, index) => (
        <TimelineItem key={index} isEven={(index + 1) % 2 === 1}>
          <TimelineHeader>
            <TimelineTitle>{item.period}</TimelineTitle>
          </TimelineHeader>
          {item.task && (
            <TimelineDescription>{item.task}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};
