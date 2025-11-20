# Notions avancées - TP5 - Compter les produits en stock / hors stock avec reduce()

## Consignes

Vous gérez une liste de produits d’un magasin.

Chaque produit indique s’il est en stock ou en rupture :

```ts
const products = [
  { name: "Stylo", inStock: true },
  { name: "Cahier", inStock: true },
  { name: "Feutre", inStock: true },
  { name: "Gomme", inStock: false },
];
```

Vous voulez obtenir un objet résumé :

```ts
{ inStock: 3, outOfStock: 1 }
```

À l’aide de reduce() :

1. Parcourez la liste des produits.
2. Incrémentez le compteur correspondant :
   - `inStock` si `product.inStock === true`
   - `outOfStock` sinon
3. Retournez l’objet des statistiques.

### Signature de la fonction dans `src/index.ts`

```ts
function countProductsByStockStatus(products: Product[]): Summary {
```
