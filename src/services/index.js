import { supabase } from "../services/supabase";

const cadenaAleatoria = () => {
  const alfabeto =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let aleatoria = "";
  for (let i = 0; i < 10; i++) {
    aleatoria += alfabeto.charAt(Math.floor(Math.random() * alfabeto.length));
  }
  return aleatoria;
};

export const uploadVideos = async ({ videoFile }) => {
  const name = cadenaAleatoria();
  const { data, error } = await supabase.storage
    .from("videos")
    .upload(`videos/${name}.mp4`, videoFile, {
      contentType: "video/mp4",
      cacheControl: "3600",
      upsert: false,
    });

  const { publicURL, error2 } = supabase.storage
    .from("videos")
    .getPublicUrl(`videos/${name}.mp4`);

  return [data, error, publicURL, error2];
};

export const publishVideos = async ({ videoSrc, description }) => {
  const default_song = "dave songs";
  const { data, error } = await supabase.from("videos").insert([
    {
      user_id: "cbf9c23e-2650-4368-8287-126358fe11ca",
      description: description,
      src: videoSrc,
      songTitle: default_song,
    },
  ]);
  return [data, error];
};

export const getVideos = async () => {
  let { data: videos, error } = await supabase
    .from("videos")
    .select(`*, users:user_id(username, avatar)`)
    .order("created_at", { ascending: false });

  if (error) return console.error(error);

  return [videos, error];
};

export const getUser = async () => {
  let { data: userVideos, error } = await supabase
    .from("users")
    .select(`videoList, videos:id(src)`);

  return [userVideos, error];
};
