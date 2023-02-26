<template>
   <v-responsive class="d-flex justify-center align-center  fill-height ">
  <v-card>
    <v-layout>
      <v-navigation-drawer id="navigationDrawer" color="grey-darken-4">
        <v-list v-model:opened="open">
      <v-list-group value="Posts">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="My posts"
          ></v-list-item>
          
        </template>

        <v-list-item v-for="post in posts" :key="post.id">
            {{ post.title }}
        </v-list-item>
        </v-list-group>
        
        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-tools"
              title="Posts actions"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
            :to="title"
          ></v-list-item>
        </v-list-group>


      
        
    </v-list>
      </v-navigation-drawer>

      

      <v-main fill-height>

        <div class="d-flex justify-center align-center text-center pt-2 bg-brown-darken-4" id="createPostSpan">
          <span class="">Create post</span>
        </div>

        <div class="d-flex justify-center text-center pt-2" id="createPost" style="height: 500px;">
          <div class="d-flex justify-center align-center text-center ">
            <v-card variant="outlined" style="height: 470px; width: 900px;">
            <Create/>
            </v-card>
          </div>
          
        </div>
       </v-main>
    </v-layout>
  </v-card>
  
    <v-card variant="outlined" >
    <div class="d-flex justify-center align-center bg-brown-darken-4">
        <h3>Forum posts</h3>
    </div>
    <v-responsive class="d-flex fill-height ">
            <v-list lines="two" class="bg-grey-darken-4">
                <v-row
        align="start"
        no-gutters
        style="height: 263px;">
                
    <v-list-item v-for="userPosts in posts" :key="userPosts.id" >
        <v-col cols="6">
        <v-card variant="outlined" style="width: 550px;" :style="'border: 1px solid white'" elevation="6" class="text-white">
            Name:{{ userPosts.name }}
            <br>
            E-mail:{{ userPosts.email }}
            <br>
            Title:{{ userPosts.title }}
            <br>
            Text:{{ userPosts.text }}
            
        </v-card>
    </v-col>
    </v-list-item>

</v-row>
</v-list>
</v-responsive>

</v-card>
  
</v-responsive>
</template>

<script setup>
import Create from '@/components/Create.vue'
</script>

<script>
import postsCollectionRef from '../firebase';
import { getDocs } from '@firebase/firestore';
export default{
  data(){
    return{
      open: ['Posts'],
      cruds: [
        ['update', 'mdi-update'],
        ['delete', 'mdi-delete'],
      ],    
      posts:[],
    }},
    methods:{
    async fetchPosts(){
          let postsSnapShot = await getDocs(postsCollectionRef);
          let posts = [];
          postsSnapShot.forEach(post=>{
            let postData = post.data();
            postData.id = post.id;
            posts.push(postData)
          })
          console.log(posts)
          this.posts = posts;
      }
    },
    created(){
      this.fetchPosts();
    }
  
}
</script>

<style>
#createPost{
  background-color: #ffe4c4;
}
#createPostSpan{
  height: 56px;
}
#itemPost{
  border-bottom: 1px solid red;
  border-right-width: thin;
}
#navigationDrawer{
  border-radius: 0;
}

</style>
