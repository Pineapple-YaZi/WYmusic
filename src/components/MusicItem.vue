<template>
  <div>
    <van-cell-group inset >
      <van-cell :title="name" center :label="authorName + '  -  ' + name" >
        <van-icon color="#333" size="25" name="play-circle-o" />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    id: {
      type: Number
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
