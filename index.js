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