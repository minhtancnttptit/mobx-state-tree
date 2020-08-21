import { WishListItem, WishList } from './WishList';
import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';
import { reaction } from 'mobx';

it("can create a instance of a model", () => {
  const item = WishListItem.create({
    name: 'Tan',
    price: 2,
    image: 'img',
  });

  expect(item.price).toBe(2);
  expect(item.name).toBe('Tan');
  item.changeName('New');
  expect(item.name).toBe('New');
})

it("can create a wishlist", () => {
  const list = WishList.create();
  const patches = [];

  onPatch(list, (patch) => {
    patches.push(patch);
  });

  const { items, add } = list;
  add({
    name: 'tu',
    price: 3,
    image: 'test',
  });
  expect(items.length).toBe(1);
  items[0].changeName('teo');
  expect(items[0].name).toBe('teo');

  expect(patches).toMatchSnapshot();
});

it("can calculate the total price of a wishlist", () => {
  let changed = 0
  const list = WishList.create({
    items: [
      {
        name: 'tan',
        price: 1,
        image: '',
      },
    ],
  });
  const { items } = list;
  expect(list.totalPrice).toBe(1);

  reaction(() => list.totalPrice, () => changed++);
  items[0].changePrice(14);
  list.add({
    name: 'test',
    price: 0,
    image: '',
  })
  expect(changed).toBe(1);

})
