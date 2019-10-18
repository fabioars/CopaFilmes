export const sortCriteriaMaker = (attribute: string) => (objectA: any, objectB: any) => {
    if (objectA[attribute] < objectB[attribute]) {
        return -1;
    }

    if (objectA[attribute] > objectB[attribute]) {
        return 1;
    }

    return 0;
};
