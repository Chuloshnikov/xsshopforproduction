export function removeParametersFromPath(path: string, parameters: any) {
    const v = Object.values(parameters);
    let newPath = path;
    for(const el of v) {
        newPath = newPath.replace(el as string, '')
    }
    return newPath.replace(/\/+$/, '/');
}
