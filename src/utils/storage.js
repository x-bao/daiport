
export default {
    fetch(key) {
        const list = JSON.parse(localStorage.getItem(key) || "[]");
        list.forEach((item, index) => {
            item.id = index;
        });
        this.uid = list.length;
        return list;
    },
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key) || '{}');
    }
};
