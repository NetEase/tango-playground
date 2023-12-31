import { IFileConfig } from '@music163/tango-core';
import { sampleFiles } from '../helpers';

export type DemoItemType = {
  title?: string;
  description?: string;
  files: IFileConfig[];
  [x: string]: any;
};

export const mergeDemo = (item: DemoItemType): DemoItemType => {
  const { files, ...rest } = item;
  const result = sampleFiles.filter(e => (
    files?.every(i => i.filename !== e.filename)
  ));
  result.push(...files);

  return {
    ...rest,
    files: result,
  };
};