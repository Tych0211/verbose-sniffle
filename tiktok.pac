function FindProxyForURL(url, host) {
  // Block TikTok
  if (dnsDomainIs(host, "tiktok.com")) {
    return "PROXY 127.0.0.2:80";
  }

  // Allow all other traffic to go through
  return "DIRECT";
}
