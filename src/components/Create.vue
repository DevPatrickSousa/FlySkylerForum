<template>
    

        
              <v-form fast-fail @submit.prevent="sendForm">
      <v-text-field
        v-model="name"
        label="Name"
        
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="Email"
        
      ></v-text-field>

      <v-text-field
        v-model="title"
        label="Title"
        
      ></v-text-field>

      <v-text-field
        v-model="text"
        label="Text"
        
      ></v-text-field>
      
  <v-file-input accept="image/*" ref="myFile" label="File input" clearable  @change="clickImagem($event)">

  </v-file-input>

      <v-btn type="submit" id="submitButton" block class="">Post</v-btn>
    </v-form>
            
            
    
    
</template>

<script>/*
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'*/
import postsCollectionRef from '../firebase';
import {storage} from '../firebase';
import {ref, uploadBytes} from "firebase/storage";
import {addDoc} from 'firebase/firestore';


  export default {
    
    data() {
      return{
    name: null,
    email: null,
    title: null,
    text: null,
   /* v$: useVuelidate(),*/
    }},
    
    methods:{
      async  createPost(){
        console.log('Creating Post.');
        const addedDoc = await addDoc(postsCollectionRef, this.$data);
        console.log(addedDoc);

        },
      clickImagem(e){
        this.file = e.target.files[0];
        console.log(this.file);
      },
      uploadImage(){
        const storageRef = ref(storage, 'folder/myFile.jpg');
        uploadBytes(storageRef,this.$refs.myFile.files[0]).then(
            (snapshot)=>{
                console.log("uploaded");
            }
        )
      },
      sendForm(){
        
            /*this.v$.$validate()
            if(!this.v$.$error){*/

                this.createPost();
                this.uploadImage();
                
            /*}else{
                console.log('erro')
            }
            */
       
            
        
        
      }},
      /*validations () {
    return {
      name: { required },
      email: { required },
      title: { required },
      text: { required },

    }
  }*/
    }
</script>

<style>

</style>