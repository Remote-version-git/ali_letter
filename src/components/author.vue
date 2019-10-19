<template>
    <div class="author">
        阿萨大大
    </div>
</template>

<script>
export default {
    porps:["id"],
    data() {
        return {
            novelData:[]
        }
    },
    created() {
        this.getNovelData()
    },
    methods: {
       async getNovelData() {
            const { data } = await this.$http.get(`/novels/${this.id}}`)
            this.novelData = data
        }
    }
}
</script>