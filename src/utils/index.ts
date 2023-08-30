import { sampleFiles } from '../mock/project';

export const demoLoader = async ({ name }: { name?: string } = {}) => {
    if (!name) {
        return sampleFiles;
    }

    let file: {
        default?: { filename: string, code: string }[]
    };
    try {
        file = await import(`./${name}/index.ts`);
    } catch (err) {
        console.warn(err);
    }
    console.log('file', file);
    if (!file?.default) {
        return sampleFiles;
    }
    
    const result = sampleFiles.filter(e => (
        file.default?.every(i => i.filename !== e.filename)
    ));
    result.push(...file.default);
    return result;
};

export const mergeDemo = (files: any[]) => {
    const result = sampleFiles.filter(e => (
        files?.every(i => i.filename !== e.filename)
    ));
    result.push(...files);
    return result;
}