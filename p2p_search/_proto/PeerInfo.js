
/**
 * Peer information proto
 *
 * @class PeerInfo
 */
class PeerInfo {
  constructor(host, lPort, rPort = null, isPending = true) {
    this.host = host;
    this.remotePort = rPort;
    this.localPort = lPort;
    this.isPending = isPending;
  }
  setSocket(sock) {
    this.sock = sock;
  }
  getAddress() {
    return this.host + ':' + this.localPort;
  }
}

module.exports = PeerInfo;