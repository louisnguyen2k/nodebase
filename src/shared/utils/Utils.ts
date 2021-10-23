class Utils {
  /**
   * Docstring Utils helper function
   */
  static cleanupText(text: string): string {
    return (
      text &&
      text
        .trim()
        .replace(/\n{2,}/g, '\n\n')
        .replace(/ +/g, ' ')
    );
  }
  static trimStringProperties(obj) {
    if (obj !== null && typeof obj === 'object') {
      for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
          return Utils.trimStringProperties(obj[prop]);
        }
        if (typeof obj[prop] === 'string') {
          obj[prop] = Utils.cleanupText(obj[prop]);
        }
      }
    }
  }
}
export { Utils };
