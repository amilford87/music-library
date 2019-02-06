var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function () {
       var printList = "";
       var listCount = 0;
       for(var playlist in this.playlists){
               printList += (`${playlist}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} tracks`);
               listCount += 1;
               if(listCount < Object.keys(this.playlists).length){
                      printList+= "\n";
               }
       }
       return printList;
  },

  printTracks: function () {
       var printList = "";
       var listCount = 0;
       for (var track in this.tracks){
              printList += (`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
              listCount += 1;
              if(listCount < Object.keys(this.tracks).length){
                     printList+= "\n";
              }
       }
       return printList;
  },

  printPlaylist: function(playlistId) {
       var printList =  "";
       var listCount = 0;
       printList += (`${playlistId}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks \n`);
       for (var track in this.playlists[playlistId].tracks){
              listCount +=1;
              var trackId = this.playlists[playlistId].tracks[track];
              printList += (`${trackId}: ${this.tracks[trackId].name} by ${this.tracks[trackId].artist} (${this.tracks[trackId].album})`);
              if(listCount < this.playlists[playlistId].tracks.length){
                     printList += "\n";
              }
       }
       return printList;
  },

 addTrackToPlaylist: function (trackId, playlistId) {
       if(Object.keys(this.tracks).includes(trackId) && Object.keys(this.playlists).includes(playlistId) ){
              this.playlists[playlistId].tracks.push(trackId);
       } else{
              console.log("Track or playlist does not exist. Try again.");
       }
       return;
  },

  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

 addTrack: function (name, artist, album) {
       var newId = uid();
       this.tracks[newId] = {id: newId,
       name: name,
       artist: artist,
       album: album
       };

  },

  addPlaylist: function (name) {
       var newId = uid();
       this.playlists[newId] = {id: newId,
       name: name,
       tracks: []
       };
  },

  printSearchResults: function(query) {
       query = query.toLowerCase();
       var matchingTracks = [];
       var printLine = "";
       for (var track in this.tracks){
              var trackName = `${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`;
              var trackLower = trackName.toLowerCase();
              if (trackLower.search(query) !== -1){
                     matchingTracks.push(trackName);
              }
       }
       matchingTracks.forEach(function(track,i){
              printLine += matchingTracks[i];
              if(i < matchingTracks.length-1){
                     printLine += "\n";
              }
       })
       return printLine;
  },

}


