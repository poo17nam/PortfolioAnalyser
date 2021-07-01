<template>
  <div :id="id" style="width: 800px; height: 600px"></div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";
import * as echarts from "echarts";
import { v4 as uuidv4 } from "uuid";

const props = defineProps({
  title: String,
  subtitle: String,
  data: Array,
});

const id = uuidv4();
const option = {
  title: {
    text: props.title,
    subtext: props.subtitle,
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: true,
    right: "5%",
    orient: "vertical",
  },
  aria: {
    enabled: true,
    decal: {
      show: true,
    },
  },
  series: [
    {
      type: "pie",
      radius: ["40%", "70%"],
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      data: props.data,
    },
  ],
};

onMounted(() => {
  const dom = document.getElementById(id);
  const chart = echarts.init(dom, null, { renderer: "svg" });
  chart.setOption(option);
});
</script>

<style scoped>
</style>