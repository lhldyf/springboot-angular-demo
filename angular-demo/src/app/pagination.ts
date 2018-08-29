export interface Pagination<T> {
    content: T[];
    size: number;
    totalPages: number;
    last?: boolean;
    first?: boolean;
    number: number;
}
