<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Brightcove Player: Disabled Scrubber</title>
  <style>
    /* turn off click events for the progress scrubber */
    .vjs-progress-control{
      pointer-events: none;
    }

    /* Uncomment this style if you would like to hide the progress scrubber but keep the element spacing */
    /*.vjs-progress-control {
    visibility: hidden;
    }*/

    /* Size the player */
    .video-js {
      width: 640px;
      height: 360px;
    }

    .videojs.registerPlugin('ScrubberJSplugin', function() {
var myPlayer = this,
myPlayer.controlBar.progressControl.disable();
});

  </style>
</head>

<body>
  <video-js data-video-id="4793962133001"
    data-account="1752604059001"
    data-player="Sk16njNtb"
    data-embed="default"
    data-application-id
    class="video-js"
    controls
    width="640"
    height="360"></video-js>
  <script src="https://players.brightcove.net/1752604059001/Sk16njNtb_default/index.min.js"></script>

</body>
</html>