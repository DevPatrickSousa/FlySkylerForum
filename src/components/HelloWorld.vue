<template>
  <v-card>
    <v-layout>
      

      <v-navigation-drawer color="surface">
        <v-list v-model:opened="open">
      

      <v-list-group value="Users">
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

        <div class="d-flex justify-center align-center text-center pt-2" id="createPostSpan">
          <span class="">Create post</span>
        </div>

        <div class="d-flex justify-center text-center pt-2" id="createPost" style="height: 500px;">
          <div class="d-flex justify-center align-center text-center ">
            <v-card variant="outlined" style="height: 440px; width: 900px;">
            <Create/>
            </v-card>
          </div>
          
        </div>


       </v-main>
    </v-layout>
  </v-card>
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
      open: ['Users'],
      cruds: [
        ['create', 'mdi-plus-outline'],
        ['read', 'mdi-file-outline'],
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
#createPostSpan{
  border-bottom: 1px solid red;
  border-left: 1px solid red;
  height: 56px;
}
#itemPost{
  border-bottom: 1px solid red;
  border-right: 1px solid red;
  
}
#submitButton{
  
}

</style>
