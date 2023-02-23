<template>
    <v-responsive class="d-flex fill-height ">
    <div class="d-flex justify-center mt-16">
        <h1>Read</h1>
    </div>
    
     

        <v-container class=" bg-surface-variant mb-6">
      
            <v-list lines="two">
                <v-row
        align="start"
        no-gutters
        style="height: 500px; "
      >
                
    <v-list-item v-for="userPosts in posts" :key="userPosts.id">
        <v-col cols="5">
        <v-card variant="outlined" style="width: 500px;">
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

</style>