import { types, getParent, destroy } from 'mobx-state-tree';

const WishListItem = types.model({
  name: types.string,
  price: types.number,
  image: types.string,
}).actions((self) => ({
  changeName(newName) {
    self.name = newName;
  },
  changePrice(newPrice) {
    self.price = newPrice;
  },
  changeImage(newImage) {
    self.image = newImage;
  },
  remove() {
    getParent(self, 2).remove(self);
  }
}));

const WishList = types.model({
  items: types.optional(types.array(WishListItem), []),
}).actions((self) => ({
  add(item) {
    self.items.push(item);
  },
  remove(item) {
    destroy(item);
  }
})).views(({ items }) => ({
  get totalPrice() {
    return items.reduce((sum, entry) => sum + entry.price, 0);
  }
}));

export { WishListItem, WishList };