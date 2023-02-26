<template>
  <v-responsive class="d-flex justify-center align-center text-center fill-height bg-grey-darken-4">
  <v-container class="fill-height d-flex justify-center ">
      
      <v-card variant="outlined" width="400" class="">
    <div class="d-flex justify-center text-center" >
        <h1>DELETE</h1>
    </div>
    
      <v-form fast-fail @submit.prevent="deletePost(postId)">
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

  <v-btn type="submit" id="submitButton" block class="" @click="snackbar = true" color="red">
        Delete
    <v-snackbar v-model="snackbar" color="success">
      <span class="d-flex justify-center">Post successfully deleted.</span>
    </v-snackbar>
      </v-btn>
    </v-form>

   
    

  </v-card>
</v-container>
  </v-responsive>
  
</template>



<script>
import postsCollectionRef from '@/firebase';
import {getDoc, doc, deleteDoc} from 'firebase/firestore'
export default{
    data(){
        return{
            selectedPost:{},
            postId: null,
            docRef: null,
            snackbar: false,
            postInfo:{
            id: null,
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
            this.postInfo.id = postData.id;
            this.postInfo.name = postData.name;
            this.postInfo.email = postData.email;
            this.postInfo.title = postData.title;
            this.postInfo.text = postData.text;


        },
        async deletePost(postId){
        let postRef = doc(postsCollectionRef, postId);
        await deleteDoc(postRef);
        console.log('deleted.');
        setTimeout(() => {
            this.$router.push('/');
        }, 2000);
        
     },  
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