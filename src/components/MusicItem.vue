<template>
  <div>
    <van-cell-group inset >
      <van-cell :title="row.name" center :label="row.song.artists[0].name + '  -  ' + row.name" >
        <van-icon color="#333" size="25" name="play-circle-o" />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },

  created () {
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
