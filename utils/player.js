const audioControllwe = {
    _nextSongs: [],
    _lastSongs: [],
    _actualSong: null,
    _progress_bar: document.getElementById("progress"),
    _controller: document.getElementById("media"),
    inicializePlayer(playlist){
        this._nextSongs = playlist;
        this._controller.addEventListener("timeupdate", function() {
            player._progress_bar.value = (this.currentTime / this.duration) * 100;
        });

        this._progress_bar.addEventListener("input", function() {
            player._controller.currentTime = (this.value * player._controller.duration) / 100;
        }
        );
    }
}