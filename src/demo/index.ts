import { DemoItemType, mergeDemo } from '../utils';
import example from './example';

export default {
  example: mergeDemo(example),
} as {
  [x: string]: DemoItemType;
};