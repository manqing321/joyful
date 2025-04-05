<script setup>
    import { reactive, watch } from 'vue'
    const pic_arr = ["miku1.png", "miku2.png", "miku3.png"];
    const pic_info = reactive({
        idx: 0,
        url: ""
    })

    const prev = () => {
        pic_info.idx -= 1;
        if (pic_info.idx < 0) {
            pic_info.idx = 2;
        }
    }

    const next = () => {
        pic_info.idx += 1;
        if (pic_info.idx > 2) {
            pic_info.idx = 0;
        }
    }

    const show_pic = (num) => {
        pic_info.idx = num - 1;
    }

    const init = () => {
        pic_info.url = pic_arr[pic_info.idx]
        console.log(pic_info.url)
        
    }

    watch(() => pic_info.idx, () => {
        init()
    })

    init()
</script>

<template>
    <div>
        <img id="pic1" width="200" src="`../pics/miku2.png`">
        
        <hr>
        <button @click="prev">prev pic</button>
        <button @click="next">next pic</button>
        <hr>
        <ul>
            <li v-for="num in 3">
                <a href="#" @click="show_pic(num)">{{ num }}</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>