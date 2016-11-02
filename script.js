window.onload = function() {

  /*// Normalize the various vendor prefixed versions of getUserMedia.
  navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia || 
                            navigator.msGetUserMedia);
                            
  
    // Check that the browser supports getUserMedia.
    // If it doesn't show an alert, otherwise continue.
    if (navigator.getUserMedia) {
      // Request the camera.
      navigator.getUserMedia(
        // Constraints
        {
          video: true
        },

        // Success Callback
        function(localMediaStream) {
            // Get a reference to the video element on the page.
            var vid = document.getElementById('camera-stream');

            // Create an object URL for the video stream and use this 
            // to set the video source.
            vid.src = window.URL.createObjectURL(localMediaStream);
        },

        // Error Callback
        function(err) {
          // Log the error to the console.
          console.log('The following error occurred when trying to use getUserMedia: ' + err);
          alert(err);
        }
      );
      

    } else {
      alert('Sorry, your browser does not support getUserMedia');
    }*/
    
    // Grab elements, create settings, etc.
    var video = document.getElementById('video');

    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
    }
    // Elements for taking the snapshot
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');

    // Trigger photo take
    document.getElementById("snap").addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
    });
}