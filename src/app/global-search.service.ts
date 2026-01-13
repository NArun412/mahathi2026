import { Injectable } from '@angular/core';

export interface GlobalSearchItem {
  text: string;        // Visible content
  route: string;       // Page route
  elementId: string;   // Auto-generated ID for scroll
}

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {
  private items: GlobalSearchItem[] = [];

  /**
   * Called by pages when they load
   */
  register(items: GlobalSearchItem[]): void {
    this.items.push(...items);
  }

  /**
   * Called by header search
   */
  search(term: string): GlobalSearchItem[] {
    const value = term.toLowerCase();
    return this.items.filter(item =>
      item.text.toLowerCase().includes(value)
    );
  }

  clear(): void {
    this.items = [];
  }
}
