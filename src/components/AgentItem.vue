<template>
  <div>
    <div class="cookie-card" style="border: 1px solid #ececf1">
      <div style="text-align: center">
        <img
          class="avatar"
          :src="require(`@/assets/geoAgents/${props.agent.img}`)"
          alt="Avatar"
          style="width: 80%; margin: 0 auto"
        />
      </div>
      <br />
      <div class="flex-container" style="height: 25px">
        <span class="title" style="float: left">{{ props.agent.name }}</span>
        <span class="provider" style="float: right"
          >@{{ props.agent.provider }}</span
        >
      </div>
      <div class="agentDesc">
        <p class="description">
          {{ props.agent.description }}
        </p>
      </div>
      <div class="actions">
        <a class="pref" href="agentDetail">查看智能体详情</a>
        <a
          class="item-button inline-flex items-center gap-x-2 rounded bg-blue-600 w-20 justify-center px-3 py-2 text-center text-sm font-medium text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
          href="/swatAgentQA"
          >调用</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
import { defineProps } from 'vue';
const props = defineProps({
  agent: {
    type: Object as () => AgentItemType,
    required: true,
  },
});

export interface AgentItemType {
  id: number;
  name: string;
  description: string;
  provider: string;
  img: string;
}
</script>

<style scoped scss>
.cookie-card {
  max-width: 275px;
  padding: 1rem;
  background-color: #f8faff;
  border-radius: 10px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
}

.cookie-card:hover {
  background-color: #edf6ff;
}

img {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 3%;
}

img:hover {
  transform: scale(1.1);
  border-radius: 3%;
}

.title {
  font-weight: 500;
  color: rgb(31 41 55);
}

.provider {
  font-weight: 300;
  color: rgb(110, 112, 114);
}

.description {
  margin-top: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(75 85 99);
}

.description a {
  --tw-text-opacity: 1;
  color: rgb(59 130 246);
}

.description a:hover {
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  flex-shrink: 0;
}

.pref {
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(31 41 55);
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  background-color: transparent;
}

.pref:hover {
  color: rgb(156 163 175);
  cursor: pointer;
}

.pref:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.accept {
  font-size: 0.75rem;
  cursor: pointer;
  line-height: 1rem;
  background-color: rgb(17 24 39);
  font-weight: 500;
  border-radius: 0.5rem;
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  border: none;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.accept:hover {
  background-color: rgb(55 65 81);
}

.accept:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>
