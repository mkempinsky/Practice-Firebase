if ('serviceWorker' in navigator) {
 
 console.log('Service Worker is supported');
 navigator.serviceWorker.register('sw.js').then(function(reg) {
   console.log(':^)', reg);


	// This code uses the ServiceWorkerRegistration object’s pushManager to subscribe to messages 
	// for the gcm_sender_id you added to the manifest.
	// You must pass a {userVisibleOnly: true} argument to the subscribe() method. 
	// This tells the browser that a notification will always be shown when a push message is received.
	// Currently it’s mandatory to show a notification.

   if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log(':^)', reg);
        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function(sub) {
            console.log('endpoint:', sub.endpoint);
        });
    }).catch(function(error) {
        console.log(':^(', error);
    });
}

 }).catch(function(err) {
   console.log(':^(', err);
 });
}