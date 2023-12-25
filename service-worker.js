self.addEventListener('install', (event) => {
    console.log('install-event', event);
    self.skipWaiting();
});
  
self.addEventListener('activate', (event) => {
    console.log('activate-event', event);
    return self.clients.claim();
});