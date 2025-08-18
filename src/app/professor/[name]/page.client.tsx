"use client";
import ProfessorProfileCard from "./_component/ProfessorProfileCard";

type ClientProfessorPageProps = {
  xLink: string;
  facebookLink: string;
  professorName: string;
  professorNameRoma: string;
  faculty: string;
  seminarName: string;
  post: string;
  researchField: string;
  mainPhotoUrl: string;
};

const ClientProfessorPage: React.FC<ClientProfessorPageProps> = ({
  xLink,
  facebookLink,
  professorName,
  professorNameRoma,
  faculty,
  seminarName,
  post,
  researchField,
  mainPhotoUrl,
}) => {
  return (
    <ProfessorProfileCard
      xLink={xLink}
      facebookLink={facebookLink}
      professorName={professorName}
      professorNameRoma={professorNameRoma}
      faculty={faculty}
      seminarName={seminarName}
      post={post}
      researchField={researchField}
      mainPhotoUrl={mainPhotoUrl}
    />
  );
};

export default ClientProfessorPage;
