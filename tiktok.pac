function FindProxyForURL(url, host) {
  // Block common ad domains
  if (dnsDomainIs(host, "tiktok.com") ||
      dnsDomainIs(url, "https://apps.apple.com/us/app/tiktok/id835599320")) {
    return "PROXY 127.0.0.2:80";
  }

  // Allow all other traffic to go through
  return "DIRECT";
}
