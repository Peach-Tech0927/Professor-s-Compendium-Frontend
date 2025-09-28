type YouTubeVideoProps = {
  youtubeUrl?: string;
  title?: string;
};

function YouTubeVideo({ youtubeUrl, title = "動画" }: YouTubeVideoProps) {
  if (!youtubeUrl || youtubeUrl.trim() === "") {
    return (
      <div className="mt-5 mx-4 lg:mx-50">
        <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg">
          <p className="text-gray-500 text-lg">動画はありません</p>
        </div>
      </div>
    );
  }

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
}

export default YouTubeVideo;