<template>
    <div class="d-flex justify-center align-center">
        <h1>Update</h1>
    </div>
    

    <v-list-item v-for="userPosts in posts" :key="userPosts.id">
            {{ userPosts.title }}
            <v-btn :to="{path: `/updatePost/${userPosts.id}`}" variant="outlined">Select</v-btn>
    </v-list-item>
    
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