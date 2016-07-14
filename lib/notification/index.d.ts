declare const api: {
    open(args: any): void;
    close(key: any): void;
    config(options: any): void;
    destroy(): void;
};
export default api;
