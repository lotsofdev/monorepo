<template>
  <div
    :id="id"
    :class="`body ${format ? 'typo-format' : ''} ${
      rhythm ? 'typo-rhythm' : ''
    } ${props.class ?? ''}`"
  >
    <div
      v-if="finalSuptitle"
      :class="`body_suptitle ${typoClasses ? 'typo-suptitle' : ''}`"
      v-html="finalSuptitle"
    ></div>
    <component
      :is="`h${headingLevel.tag}`"
      :class="`body_title ${
        typoClasses ? `typo-h${headingLevel.display}` : ''
      }`"
      v-html="finalTitle"
    />
    <div
      v-if="finalSubtitle"
      :class="`body_subtitle ${typoClasses ? 'typo-subtitle' : ''}`"
      v-html="finalSubtitle"
    ></div>

    <div
      :class="`body_lead ${typoClasses ? 'typo-lead' : ''}`"
      v-html="finalLead"
    ></div>
    <div
      :class="`body_text ${typoClasses ? 'typo-p' : ''}`"
      v-html="finalText"
    ></div>

    <nav class="body_buttons" v-if="buttons?.length">
      <Button v-for="(button, i) in buttons" v-bind="button" :key="i" />
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Button from '../button/button.vue';
import './body.css';
import type { TBody } from './body.type.js';

const props = withDefaults(defineProps<TBody>(), {
  headingLevel: () => {
    return {
      tag: 3,
      display: 3,
    };
  },
});

const finalSuptitle = computed(() => props.suptitle ?? ''),
  finalSubtitle = computed(() => props.subtitle ?? ''),
  finalTitle = computed(() => props.title ?? ''),
  finalLead = computed(() => props.lead ?? ''),
  finalText = computed(() => props.text ?? '');
</script>
