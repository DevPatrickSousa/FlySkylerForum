<template>
    <div class="d-flex justify-center text-center">
        <h1>Update Post</h1>
    </div>
    
    <v-form fast-fail @submit.prevent="updatePost">
      <v-text-field
        v-model="postInfo.name"
        label="Name"
        
      ></v-text-field>

      <v-text-field
        v-model="postInfo.email"
        label="Email"
        type="email"
        
      ></v-text-field>

      <v-text-field
        v-model="postInfo.title"
        label="Title"
        
      ></v-text-field>

      <v-text-field
        v-model="postInfo.text"
        label="Text"
        
      ></v-text-field>
      
  <v-file-input accept="image/*" ref="myFile" label="File input" clearable  @change="clickImagem($event)">

  </v-file-input>

      <v-btn type="submit" id="submitButton" block class="">Post</v-btn>
    </v-form>






</template>

<script setup>

</script>

<script>
import postsCollectionRef from '@/firebase';
import {getDoc, doc, setDoc} from 'firebase/firestore'
export default{
    data(){
        return{
            selectedPost:{},
            postId: null,
            docRef: null,
            postInfo:{
            name: null,
            email: null,
            title: null,
            text: null,
            },
            
        }
    },
    methods:{
      async  getPost(){
            let postRef = doc(postsCollectionRef, this.postId);
            this.docRef = postRef;
            let post = await getDoc(this.docRef);
            let postData = post.data();
            this.postInfo.name = postData.name;
            this.postInfo.email = postData.email;
            this.postInfo.title = postData.title;
            this.postInfo.text = postData.text;


        },
    async updatePost(){
        await setDoc(this.docRef, this.postInfo);
        console.log('post updated!');
        this.$router.push('/');
    }
    },
    created(){
        let postId = this.$route.params.postid;
        this.postId = postId;
        this.getPost();
    }
}
</script>
<style>

</style>