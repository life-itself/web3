import { YOUTUBE_REGEX, YOUTUBE_ID_REGEX } from "lib/constants";

export function getYoutube(youtube) {
  let youtubeThumbnail;

  const youtubeId =
    youtube && YOUTUBE_REGEX.test(youtube) && youtube.match(YOUTUBE_ID_REGEX)[1];

  if (youtubeId) {
    //  get the youtube thumbnail image from https://img.youtube.com/vi/<youtube-video-id>/maxresdefault.jpg
    youtubeThumbnail = youtube.replace(
      YOUTUBE_REGEX,
      `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    );
  }

  return {
    id: youtubeId,
    thumbnail: youtubeThumbnail
  };
}
