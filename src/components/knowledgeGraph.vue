<template>
  <div>
    <div style="height: calc(100vh - 60px)">
      <RelationGraph
        ref="graphRef"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import RelationGraph from 'relation-graph/vue3';

const graphRef = ref<RelationGraph>();
// let isShowCodePanel = ref(false);
let graphOptions = reactive({
  debug: false,
  // lineUseTextPath: true,
  // allowSwitchLineShape: true,
  allowSwitchJunctionPoint: true,
  allowShowDownloadButton: true,
  defaultJunctionPoint: 'border',
});

onMounted(() => {
  showGraph();
});

const showGraph = function () {
  const __graph_json_data = {
    rootId: 'a',
    nodes: [
      { id: 'a', text: 'A', borderColor: 'yellow' },
      { id: 'b', text: 'B', color: '#43a2f1', fontColor: 'yellow' },
      { id: 'c', text: 'C', nodeShape: 1, width: 80, height: 60 },
      { id: 'e', text: 'E', nodeShape: 0, width: 150, height: 150 },
    ],
    lines: [
      { from: 'a', to: 'b', text: '关系1', color: '#43a2f1' },
      { from: 'a', to: 'c', text: '关系2' },
      { from: 'a', to: 'e', text: '关系3' },
      { from: 'b', to: 'e', text: '', color: '#67C23A' },
    ],
  };
  graphRef.value.setJsonData(__graph_json_data);
};
const onNodeClick = function (nodeObject: object, $event: MouseEvent) {
  console.log('onNodeClick:', nodeObject);
  console.log('onNodeClick:', $event);
};
const onLineClick = function (
  lineObject: unknown,
  linkObject: unknown,
  $event: unknown
) {
  console.log('onLineClick:', lineObject);
  console.log('onLineClick:', linkObject);
  console.log('onLineClick:', $event);
};
</script>
