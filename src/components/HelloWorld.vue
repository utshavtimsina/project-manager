<template>
  <div>
      <h1>

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex expedita labore veritatis repellendus vitae? Dolorum temporibus in dolore sapiente eaque aliquid fuga consequatur inventore, itaque possimus neque harum animi suscipit.
      </h1>
      <v-btn class="red white--text">click me</v-btn>
      <v-btn color="pink" dark> pink button</v-btn><v-btn dark>dark</v-btn>
      <v-btn flat color="primary"> dark pink</v-btn>
      <br>
      <v-btn depressed  >
        <v-icon>android</v-icon>
      </v-btn>
      
      <v-btn fab color="pink">
              <v-icon>mdi-android</v-icon>
            </v-btn>
            <v-btn fab color="pink">
              <v-icon color="white" >mdi-heart</v-icon>
            </v-btn>
      
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
  }
};
</script>
<style>
</style>