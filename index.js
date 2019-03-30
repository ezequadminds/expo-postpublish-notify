// type PostPublishHookOptions = {
//   url: string, // Published URL of the project
//   exp: ExpConfig, // Public configuration from your exp.json
//   iosBundle: string, // iOS JS bundle as a string
//   iosSourceMap: string, // iOS source map as a string
//   iosManifest: PublishedManifest, // Published iOS manifest
//   androidBundle: string, // Android JS bundle as a string
//   androidSourceMap: string, // Android source map as a string
//   androidManifest: PublishedManifest, // Published Android manifest
//   projectRoot: string, // Path to the project
//   log: (msg) => void, // Call this function to log to exp/
// }

module.exports = async ({ url, iosManifest, config }) => {
  const { webhookUrl } = config;
  const axios = require('axios');
  console.log('Running notify hook');
  return new Promise((resolve, reject) => {
    const releaseChannel = iosManifest.releaseChannel || 'default';
    const queryString = releaseChannel === 'default' ? '' :
      '?release-channel='+encodeURIComponent(releaseChannel)
    const payload = {
      text: `${iosManifest.name} v${iosManifest.version} published to ${url + queryString}`
    };
    return axios.post(webhookUrl, payload);
  });
};