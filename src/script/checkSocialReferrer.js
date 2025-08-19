export function checkSocialReferrer() {
  const ref = document.referrer.toLowerCase();

  if (ref.includes("facebook.com")) {
    console.log("El usuario viene desde Facebook");
    return "facebook";
  } else if (ref.includes("instagram.com")) {
    console.log("El usuario viene desde Instagram");
    return "instagram";
  } else if (ref.includes("tiktok.com")) {
    console.log("El usuario viene desde TikTok");
    return "tiktok";
  } else {
    console.log("El usuario no viene de Facebook, Instagram ni TikTok");
    return null;
  }
}