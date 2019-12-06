<template>
  <nav >
       
      <v-toolbar app dark>
          <v-btn dark fab flat depressed @click="drawerBtn" >
              <v-icon    >mdi-format-list-bulleted</v-icon>
          </v-btn>
           
         <v-toolbar-title class="mx-2">
             
             <span class="font-weight-light">Project</span>
            <v-divider   ></v-divider>
             <span>Manager</span>
         </v-toolbar-title>
         
         <v-spacer></v-spacer>
         <v-toolbar-title>
             <v-btn dark flat color="grey">
                 <span right>Logout</span>
                 <v-icon>mdi-logout</v-icon>
             </v-btn>
         </v-toolbar-title>
         
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" app temporary color="#9652ff">
           <v-list color="#9652ff" dark >
               <v-subheader class="title mx-5">Actions</v-subheader>
               <v-list-item-group>
                   <v-list-item v-for="item in List" v-bind:key="item.name" router :to="item.route">
                       <v-list-item-icon class="title">
                           <v-icon >
                               {{item.icon}}
                           </v-icon>
                       </v-list-item-icon>
                    <v-list-tile-content >
                       <v-list-tile-title class="title">
                         {{item.name}} 
                       </v-list-tile-title>
                   </v-list-tile-content>
                   </v-list-item>
               </v-list-item-group>
                 
           </v-list>
        </v-navigation-drawer>
      
  </nav>
</template>

<script>
export default {
    name:"navbar",
    data(){
        return{
            drawer:false,
            List:[
                {
                    icon:"mdi-desktop-mac-dashboard",
                    name:"Dashboard",
                    route:"/"
                },
                {
                    icon:"mdi-folder",
                    name:"My Projects",
                    route:"/project"
                },
                {
                    icon:"mdi-face",
                    name:"Team",
                    route:"/team"
                }
            ],
        }
    },
    methods:{
        drawerBtn(){
            this.drawer = !this.drawer;
        }
    }
}
</script>

<style>

</style>