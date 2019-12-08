Vue.component('comment', {
    props: {
        postId: Number,
        id: Number,
        name: String,
        email: String,
        body: String,
    },
    template: `
      <div class="comment">
        <h1>{{ name }}</h1>
        <p>{{ body }}</p>
      </div>
    `
})

const app = new Vue({
    el: '#app',
    // インスタンスにアクセスできる
    data: {
        comments: []
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            this.comments = data;
        })
        console.log(this.comments)
    }
})