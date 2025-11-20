// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { countProductsByStockStatus } from "../index";

describe("countProductsByStockStatus", () => {
  test("devrait retourner 3 en stock et 1 hors stock pour la liste de test", () => {
    const products = [
      { name: "Stylo", inStock: true },
      { name: "Cahier", inStock: true },
      { name: "Feutre", inStock: true },
      { name: "Gomme", inStock: false },
    ];
    const result = countProductsByStockStatus(products);
    expect(result).toEqual({ inStock: 3, outOfStock: 1 });
  });

  test("devrait gérer une liste vide", () => {
    const products: any[] = [];
    const result = countProductsByStockStatus(products);
    expect(result).toEqual({ inStock: 0, outOfStock: 0 });
  });

  test("devrait compter correctement quand tous les produits sont en stock", () => {
    const products = [
      { name: "Produit A", inStock: true },
      { name: "Produit B", inStock: true },
      { name: "Produit C", inStock: true },
    ];
    const result = countProductsByStockStatus(products);
    expect(result).toEqual({ inStock: 3, outOfStock: 0 });
  });

  test("devrait compter correctement quand tous les produits sont hors stock", () => {
    const products = [
      { name: "Produit A", inStock: false },
      { name: "Produit B", inStock: false },
    ];
    const result = countProductsByStockStatus(products);
    expect(result).toEqual({ inStock: 0, outOfStock: 2 });
  });

  test("devrait compter correctement avec une liste mixte", () => {
    const products = [
      { name: "Article 1", inStock: true },
      { name: "Article 2", inStock: false },
      { name: "Article 3", inStock: true },
      { name: "Article 4", inStock: false },
      { name: "Article 5", inStock: true },
    ];
    const result = countProductsByStockStatus(products);
    expect(result).toEqual({ inStock: 3, outOfStock: 2 });
  });
});
