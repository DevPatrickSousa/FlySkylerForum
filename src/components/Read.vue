<template>
    <div class="d-flex justify-center align-center">
        <h1>Read</h1>
    </div>
    
    <v-list lines="one"> 
        
    <v-list-item v-for="userPosts in posts" :key="userPosts.id">
        <v-card variant="outlined">
            Name:{{ userPosts.name }}
            <br>
            E-mail:{{ userPosts.email }}
            <br>
            Title:{{ userPosts.title }}
            <br>
            Text:{{ userPosts.text }}
        </v-card>
    </v-list-item>

</v-list>
   
</template>

<script>
import postsCollectionRef from '../firebase';
import { getDocs } from '@firebase/firestore';
export default{
    data(){
        return{
            posts:[],
    }
    },
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

</style>