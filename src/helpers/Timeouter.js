/**
 * @class Timeouter
 */
class Timeouter {
  /**
   * Creates an instance of Timeouter.
   * @memberof Timeouter
   */
  constructor () {
    this.blockedUsers = [];
  }

  removeUserFromTimeout ({ username, tmi }) {
    this.blockedUsers.splice(this.blockedUsers.indexOf(username), 1);

    const res = `The timeout for user "${username}" is cleared`;

    console.log(res);

    // await tmi.cb(tmi.channel, res);
  }

  getBlockedUsers () {
    return this.blockedUsers;
  }

  timeoutUser ({ username, timeout = 60 * 1000, reason = 'no reason was specified', tmi = {} } = {}) {
    if (!username) return;

    const res = `User ${username} was timed out for ${timeout / 1000} seconds, reason: ${reason}`;

    this.blockedUsers.push(username);

    setTimeout(() => this.removeUserFromTimeout({ username, tmi }), timeout);

    console.log(res);

    // await tmi.cb(tmi.channel, res);
  }
}


export default new Timeouter();
