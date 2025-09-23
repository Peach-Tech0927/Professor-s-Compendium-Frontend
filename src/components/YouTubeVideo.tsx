type YouTubeVideoProps = {
  youtubeUrl: string;
  title?: string;
};

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ youtubeUrl, title = "動画" }) => {
  return (
    <div className="mt-5 mx-4 lg:mx-50">
      <div className="relative w-full aspect-video">
        <iframe
          src={youtubeUrl}
          title={title}
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubeVideo;