import { Card, CardContent } from "./ui/card";

const ProfessorProfileCard = () => {
  return (
    <Card className="w-1/2 mt-20 p-0">
      <CardContent className="flex p-0">
        <div className="w-[50px] bg-[#f3c4c5]">ここに教授の写真入れる</div>
        <div>ここに教授の名前入れる</div>
      </CardContent>
    </Card>
  );
};

export default ProfessorProfileCard;
