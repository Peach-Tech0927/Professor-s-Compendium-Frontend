import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineHeader,
  TimelineImage,
} from "@/components/Timeline";

export const CareerTimeline = ({
  careerHistory,
}: {
  careerHistory: {
    year: string;
    event: string;
    photo: string | null;
  }[];
}) => {
  return (
    <Timeline className="mt-8">
      {careerHistory.map((item, index) => (
        <TimelineItem key={index} isEven={(index + 1) % 2 === 1}>
          <TimelineHeader>
            <TimelineTitle>{item.year}</TimelineTitle>
          </TimelineHeader>
          {item.event && (
            <TimelineDescription>{item.event}</TimelineDescription>
          )}
          {item.photo && <TimelineImage src={item.photo} />}
        </TimelineItem>
      ))}
    </Timeline>
  );
};
