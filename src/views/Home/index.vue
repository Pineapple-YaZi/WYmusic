<template>
  <div>
    <div class="recommend">最新音乐</div>

    <Recommend v-for="item in newSongs" :row="item" :key="item.id"></Recommend>
  </div>
</template>

<script>
import Recommend from '@/components/MusicItem.vue'
import '@/utils/request.js'
import { getNewList } from '@/api/recommend.js'
export default {
  data () {
    return {
      newSongs: []
    }
  },

  created () {
    this.getNewSong()
  },
  components: {
    Recommend
  },

  methods: {
    async  getNewSong () {
      const res = await getNewList({
        limit: 20
      })
      this.newSongs = res.data.result
    }
  }
}
</script>

<style scoped>
.recommend{
  height: 40px;
  line-height: 40px;
  background-color: #e94242;
  color: #fff;
  padding-left: 10px;
}
</style>
