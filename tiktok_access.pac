function FindProxyForURL(url, host) {
  // Block common ad domains
  if (dnsDomainIs(host, "tiktok.com") ||
      dnsDomainIs(host, "https://iosapps.itunes.apple.com/itunes-assets/Purple126/v4/a2/66/bb/a266bb62-8601-9905-7c4c-c9bd8973ca48/extDiryszlkxikarpjdmjm.thinned.signed.dpkg.ipa")) {
    return "PROXY 127.0.0.2:80";
  }

  // Allow all other traffic to go through
  return "DIRECT";
}


https://github.com/Tych0211/verbose-sniffle.git