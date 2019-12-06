<template>
  <div class="Team">
    <v-container>
      <v-layout row>
        <v-flex md6 xs8 lg4 v-bind:key="employe.name" v-for="employe in employee">
          <v-spacer></v-spacer>
          <v-card class="ma-1">
            <v-card-text>
              <span v-html="employe.avatar"></span>
             
            </v-card-text>
            <v-card-title>
              {{employe.name}}
            </v-card-title>
            <v-card-subtitle>
              {{employe.role}}
            </v-card-subtitle>
            <v-card-actions >
              <v-spacer></v-spacer>
              <v-btn color="grey " >
                <v-icon left >mdi-message-bulleted</v-icon>
                <span>Contact</span>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
          <v-spacer></v-spacer>
        </v-flex>
       
      </v-layout>
    </v-container>
   
  </div>
</template>

<script>
export default {
    name:"team",
    data(){
      return{
        employee:[
          {
            name:"Utshav",
            role:"Web Developer",
            avatar: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Futshavtimsina%2Fposts%2F2538231216188248%3A0&width=500" width=auto height=400 style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
          },
           {
            name:"Bijay",
            role:"Digital Marketing",
            avatar:'<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyek.pathak%2Fposts%2F10156045412538507&width=500" height=400 style="border:none;overflow:hidden" allow="encrypted-media"></iframe>'
          },
           {
            name:"Ashish",
            role:"Designeer",
            avatar:'<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffrankzd.03%2Fposts%2F1106957742847515&width=500" height=400 style="border:none;"  frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
          },



        ],
      }
    },
}
</script>

<style>

</style>