new Vue({
    el: "#app",
    data() {
        return {
            show: false
        }
        
    },
    methods: {
        toggle: function () {
            this.show = !this.show;
        }
    }
}) 