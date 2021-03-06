/**
 * Analytics Adapter for Adagio
 */

import adapter from '../src/AnalyticsAdapter';
import adapterManager from '../src/adapterManager';

// This config makes Prebid.js call this function on each event:
//   `window['AdagioPrebidAnalytics']('on', eventType, args)`
// If it is missing, then Prebid.js will immediately log an error,
// instead of queueing the events until the function appears.
var adagioAdapter = adapter({
  global: 'AdagioPrebidAnalytics',
  handler: 'on',
  analyticsType: 'bundle'
});

adapterManager.registerAnalyticsAdapter({
  adapter: adagioAdapter,
  code: 'adagio'
});

export default adagioAdapter;
