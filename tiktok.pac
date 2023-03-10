function FindProxyForURL(url, host) {
  // Block common ad domains
  if (dnsDomainIs(host, "tiktok.com") ||
      shExpMatch(url, "https://app-site-association.cdn-apple.com")) {
    return "PROXY 127.0.0.2:80";
  }

  // Allow all other traffic to go through
  return "DIRECT";
}
