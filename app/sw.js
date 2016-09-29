//***    NOTES ****

// In a service worker, "self" refers to the ServiceWorkerGlobalScope object: the service worker itself.
// By default an old service worker will stay running until all tabs that use it are closed or unloaded. 
// A new service worker will remain in the waiting state.
// When skipWaiting() is called (as in the code below) the service worker will skip the waiting state 
// and immediately activate.


console.log('Started', self);

self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  console.log('Push message received', event);
  // TODO
});