var loopAudio = new Audio("audio/loop.mp3");
      var drumSound = [new Audio("audio/01_kick_drum.wav"), 
      					new Audio("audio/02_closed_hihat.wav"),
      					new Audio("audio/03_open_hihat.wav"),
      					new Audio("audio/04_clap.wav"),
      					new Audio("audio/05_snap.wav"),
      					new Audio("audio/06_crash.wav"),
      					new Audio("audio/07_tom1.wav"),
      					new Audio("audio/08_tom2.wav"),
      					new Audio("audio/09_tambourine.wav")];

      function playMusic() {
      	loopAudio.play();
      }

      function stopMusic() {
      	loopAudio.pause();
      }

      function keyDown(event) {
      	var key = event.key;
      	
      	if (Number(key) <= 9 && Number(key) >= 1) {
      		document.getElementById("cell" + key).classList.add('playing');
      		var sound = drumSound[Number(key) - 1];
      		sound.currentTime = 0;
      		sound.play();
      	}
      }

	  function keyUp(event) {
      	var key = event.key;
      	
      	if (Number(key) <= 9 && Number(key) >= 1) {
      		document.getElementById("cell" + key).classList.remove('playing');
      	}
      }      

      document.getElementById("play-btn").addEventListener('click', playMusic);
      document.getElementById("stop-btn").addEventListener('click', stopMusic);
      document.addEventListener('keydown', keyDown);
      document.addEventListener('keyup', keyUp);