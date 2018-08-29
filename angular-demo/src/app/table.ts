import { Observable } from "rxjs";
import { Pagination } from "./pagination";

export interface Table<T> {
    fetchPage(pageNumber: number, pageSize: number): Observable<Pagination<T>>;
}
