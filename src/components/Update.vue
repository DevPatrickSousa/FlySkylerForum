<template>
    <v-responsive class="d-flex justify-center align-center text-center fill-height bg-grey-darken-4">
  <v-container class="fill-height d-flex justify-center ">
      
      <v-card variant="outlined" width="400" class="">
        
        <div class="d-flex justify-center text-center"  >
        <span id="updatePostSpan">Choose the post that you want to <strong>update</strong>.</span>
      </div>
        <div class="d-flex flex-column justify-center text-center bg-brown-darken-4">
    <v-list-item v-for="userPosts in posts" :key="userPosts.id">
            {{ userPosts.title }}
            <br>
            <v-btn :to="{path: `/update/${userPosts.id}`}" variant="outlined">Select</v-btn>
    </v-list-item>
  </div>
</v-card>
</v-container>
  </v-responsive>

  
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
#updatePostSpan{
  font-size: 20px;
}
</style>