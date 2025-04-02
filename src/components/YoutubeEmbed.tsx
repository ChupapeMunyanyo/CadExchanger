'use client';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function YoutubeEmbed() {
  // Правильные типы для параметров
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0, // 0 или 1
      modestbranding: 1, // скрывает лого YouTube
      rel: 0, // отключает похожие видео
      fs: 0 // отключает полноэкранный режим
    },
  };

  // Конфигурация iframe через containerClassName
  const containerClass = 'youtube-container';

  return (
    <div className={containerClass}>
      <YouTube 
        videoId="dQw4w9WgXcQ" 
        opts={opts}
      />
    </div>
  );
}