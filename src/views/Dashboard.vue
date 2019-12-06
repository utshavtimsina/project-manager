<template>
  <div class="Dashboard" >
    <h1 style="margin-left:50%;" class="grey--text">Dashboard</h1>
    <v-container  style="margin:auto;" >
       <v-layout row class="pa-3">
         <v-card class="pa-3 my-2">
           <v-tooltip top>
             <template v-slot:activator="{ on }">
              <span v-on="on" class="grey--text "  >Sort By</span>
             </template>
             <span>You can sort the content by using either person's name or project name</span>
           </v-tooltip>
          
         <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" depressed class="white grey--text" @click="sortBy('person')">
                <v-icon class="dark--text">mdi-folder</v-icon>
                <span >person</span>
              </v-btn>
            </template>
            <span>Sort the content by person's name</span>
         </v-tooltip>
         <v-divider vertical ></v-divider>
        <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" depressed class="white grey--text" @click="sortBy('title')">
                <v-icon class="dark--text">mdi-face</v-icon>
                <span >Project</span>
              </v-btn>
            </template>
            <span>Sort the content by Project name</span>
         </v-tooltip>
          
         
          <v-spacer></v-spacer>
         </v-card>
         
        </v-layout>
        
      <v-card class="pa-3" >
       

        <v-layout row :key=project v-for="project in Projects" :class="`pa-4 mx-2 ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div dark>{{project.title}} </div>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Person</div>
            <div dark>{{project.person}}</div>
          </v-flex>
          <v-flex xs4 md2>
            <div class="caption grey--text">Submit By</div>
            <div dark>{{project.submitdate}}</div>
          </v-flex>
           <v-flex xs4 md2 >
             <div right class="right">
               
               <v-chip large color="#2222" >{{project.status}}</v-chip>
             </div>
            
          </v-flex>
           <v-divider  light class="mx-2 my-2"></v-divider>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
    name:"Dashboard",
    methods:{
      sortBy(id){
        this.Projects.sort((a,b) => a[id]< b[id]?-1:1);
      }
    },
    computed:{
     
    },
    data(){
      return{
        Projects:[
          {
            title:"Create A Website",
            person:"Utshav",
            submitdate:"2020/11/6",
            status:"completed"

          },
          {
            title:"Render project",
            person:"Bijay",
            submitdate:"2019/11/6",
            status:"ongoing"

          },
           {
            title:"Make Payments",
            person:"Sudip",
            submitdate:"2020/11/6",
            status:"delayed"

          },
          {
            title:"Mash Up the Blog",
            person:"Ashish",
            submitdate:"2019/11/6",
            status:"completed"

          },
        ],
        date:"",
      }
    },
    created(){
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      var newdate = year + "/" + month + "/" + day;
      this.date =newdate;
      //alert(newdate);
    }

}
</script>

<style scoped>
  .ongoing{
    border-left: 4px solid rgba(13, 80, 224, 0.897);
  }
  .delayed{
     border-left: 4px solid rgba(224, 108, 13, 0.897);
  }
  .completed{
    border-left: 4px solid rgba(8, 197, 109, 0.897);
  }
  .style{
    background: red;
  }
</style>>
