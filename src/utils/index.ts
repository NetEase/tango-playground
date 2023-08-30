import { sampleFiles } from '../mock/project';

export const mergeDemo = (files: any[]) => {
  const result = sampleFiles.filter(e => (
    files?.every(i => i.filename !== e.filename)
  ));
  result.push(...files);
  return result;
}