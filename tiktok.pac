function FindProxyForURL(url, host) {
  // Block common ad domains
  if (dnsDomainIs(host, "tiktok.com") ||
      dnsDomainIs(host, "iosapps.itunes.apple.com")) {
    return "PROXY 127.0.0.2:80";
  }

  // Allow all other traffic to go through
  return "DIRECT";
}
