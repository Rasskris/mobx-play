import { makeAutoObservable } from 'mobx';
import * as api from '../api';
import { Book } from '../interfaces';
import { WithBooleanFlag } from './WithBooleanFlag';

class Store {
  isLoading = false;
  searchByAuthor = new WithBooleanFlag();
  query = '';
  books: Book[] = [];
  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setQuery = (value: string) => {
    this.query = value;
  };

  onSearch = async () => {
    try {
      this.isLoading = true;
      const result = await api.searchBook(this.query, this.searchByAuthor.value);
      this.books = result;
    } catch (error: any) {
      this.error = error.message;
    } finally {
      this.isLoading = false;
    }
  };
}

export const bookStore = new Store();
