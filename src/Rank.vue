<template>

  <div id="app">
        <hr>
      <table class="center">
        <tr>
          <th>id</th>
          <th>Artist</th>
          <th>title</th>
          <th>votes</th>
          <th>Spotify</th>
        </tr>
        <tr v-for="(song,i) in songs" :key="i">
          <td>{{song.id}}</td>
          <td>{{song.artist}}</td>
          <td>{{song.title}}</td>
           <td>{{song.votes}}</td>
          
          <td>{{song.spotify}}</td>
          
        
        </tr>
      </table>

  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
  return {
      songs: [],
      votes: [],
    }
    },
    

    methods: {
      async  AllSongs() {
                   await fetch('http://webservies.be/eurosong/Songs')
                        .then((res) => res.json())
                        .then((songs) => {
                            this.Artists(songs);
                            setTimeout(()=>{
                                this.songs = songs;
                            },100)
                            songs.forEach(element => {

                            let url = "http://webservies.be/eurosong/songs/"+element.id+"/points";
                            fetch(url)
                                .then(response => response.json())
                                .then((data) => { element.votes = data });
                            });
                        })
                        console.log(this.songs)
                },
      
      Artists(songs) {
      fetch("http://webservies.be/eurosong/Artists")
        .then((res) => res.json())
        .then((artists) => {
          songs.map((song) => {
            song.artist = artists.find((artist) => artist.id == song.artist).name;
          });
        })},
          
},
  
  mounted() {
    this.AllSongs()
          }
}
</script>
<style lang="scss">
    body {
  background-color: lightblue;
}
.table {
  table-layout: fixed;
  width: 400px;
  height: 500px;
  border: 1px solid red;
  
}
.center {
  margin-left: auto;
  margin-right: auto;
}

tr, td {
  border: solid;
  width: 40px;
  height: 50px;
}

td {
  border: 1px solid blue;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>
