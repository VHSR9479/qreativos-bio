export function checkSocialReferrer() {
  const ref = document.referrer.toLowerCase();

  if (ref.includes("facebook.com")) {
    return "facebook";
  } else if (ref.includes("instagram.com")) {
    return "instagram";
  } else if (ref.includes("tiktok.com")) {
    return "tiktok";
  } else {
    return null;
  }
}