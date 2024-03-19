<template>
  <Panel position="top-right" class="save-restore-controls">
    <button style="background-color: #33a6b8" @click="onSave">save</button>
    <button style="background-color: #113285" @click="onRestore">
      restore
    </button>
    <button style="background-color: #6f3381" @click="onAdd">add node</button>
  </Panel>
</template>

<script lang="ts" setup>
import { Panel, useVueFlow } from '@vue-flow/core';

const flowKey = 'example-flow';

const {
  nodes,
  addNodes,
  setNodes,
  setEdges,
  dimensions,
  setTransform,
  toObject,
} = useVueFlow();

function onSave() {
  localStorage.setItem(flowKey, JSON.stringify(toObject()));
}

function onRestore() {
  const item = localStorage.getItem(flowKey);

  if (item) {
    const flow = JSON.parse(item);

    if (flow) {
      const [x = 0, y = 0] = flow.position;
      setNodes(flow.nodes);
      setEdges(flow.edges);
      setTransform({ x, y, zoom: flow.zoom || 0 });
    }
  }
}

function onAdd() {
  const id = nodes.value.length + 1;

  const newNode = {
    id: `random_node-${id}`,
    label: `Node ${id}`,
    position: {
      x: Math.random() * dimensions.value.width,
      y: Math.random() * dimensions.value.height,
    },
  };

  addNodes([newNode]);
}
</script>

<style scoped>
.save-restore-controls {
  font-size: 12px;
}
.save-restore-controls button {
  margin-left: 5px;
  padding: 5px;
  border-radius: 5px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 10px #0000004d;
  cursor: pointer;
}
.save-restore-controls button:hover {
  transform: scale(105%);
  transition: 0.25s all ease-in-out;
}
</style>
