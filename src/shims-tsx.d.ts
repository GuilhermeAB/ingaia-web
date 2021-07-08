import Vue from 'vue';
import type { VNode } from 'vue';

declare global {
  namespace JSX {
       type Element = VNode;
       type ElementClass = Vue;
    type IntrinsicElements = Record<string, any>;
  }
}
