<template>
<div class="app">
    <div class="input">
        <input style="width:400px; height:20px" v-model="keyword" type="text">
        <button style="width:100px; height:30px" @click="searchArticles()">Search</button>
    </div>
    <div class="wrapper" style="width:80%; justify-content:center">
        <ul class="articles">
            <li v-for="article in listArticle" :key="article.id" style="list-style:none">
              <div style="display:flex; margin:20px">
                <div class="image" >
                  <img style="width:300px; height:300px" :src="article.urlToImage" alt="">
                </div>
                <div>
                  <div style="display:block">
                    <a :href="article.url"><h2>{{ article.title }}</h2></a>
                    <h3><b>Author:</b> {{article.author}}</h3>
                    <p><b>Description:</b>  {{ article.description }}</p>
                    <p><b>Source:</b>  {{article.source.name}}</p>
                    <p><b>Published at: </b> {{article.publishedAt}}</p>
                  </div>
                </div>
                <div>
                  <a :href="'https://www.facebook.com/sharer/sharer.php?u='+article.url"><button style="width:100px; height:30px">Facebook</button></a>
                  <a :href="'https://twitter.com/intent/tweet?text='+article.title+'&url='+article.url"><button style="width:100px; height:30px">Twitter</button></a>
                </div>
              </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {
    searchService
} from "@/service/searchService"

export default {
    name: 'HelloWorld',
    data() {
        return {
            keyword: '',
            listArticle: [],
        }
    },
    methods: {
        async searchArticles() {
            try {
                const resp = await searchService.getArticles(this.keyword);
                this.listArticle = resp.data.articles;
                console.log(this.listArticle);
            } catch (e) {
                console.log(e);
            }
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
