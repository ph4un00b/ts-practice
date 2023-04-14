/**
 * @abstract
 * typescript flavor:
 * school of type inference
 */

type Item = typeof anItem;

type Group<I extends Record<string, number | string>> = {
  group: string;
  items: Array<Readonly<I>>;
};

// class code from a random peep on internet
class GroupBy {
  static letter<T extends Record<string, number | string>>(
    arr: ReadonlyArray<T>,
    key: keyof T,
  ) {
    const reduced = arr.reduce(
      (map, item) => {
        const [keyLetter] = item[key].toString().toUpperCase();
        const group = map.get(keyLetter) || { group: keyLetter, items: [] };
        group.items.push(item);
        map.set(keyLetter, group);
        return map;
      },
      new Map<string, Readonly<Group<T>>>(),
    );

    console.log(reduced);
    return Array.from(reduced, ([, value]) => value);
  }

  static date(arr: any, key: any) {
    return Array.from(
      arr.reduce((map: any, item: any) => {
        const date = new Date(item[key]);
        const groupKey = date.toISOString().split("T")[0];
        const group = map.get(groupKey) || { group: groupKey, items: [] };
        group.items.push(item);
        map.set(groupKey, group);
        return map;
      }, new Map()),
      ([, value]) => value,
    );
  }
}

import { assertEquals } from "https://deno.land/std@0.183.0/testing/asserts.ts";

Deno.test("letter", () => {
  const result = GroupBy.letter(data, "owner");
  assertEquals(result, expected);

  // const item = result[0].items[0];
  const [item] = result;
  const { items: [firstItem] } = item;
  /**
   * @description
   * relying on type inference
   */
  console.log(firstItem.time = "jamon");
});

const anItem = {
  game_id: 1,
  notes: "Game was played",
  owner: "steve",
  players: "10",
  sport: "hockey",
  time: "2017-10-04T20:24:30+00:00",
};

const expected = [
  {
    group: "S",
    items: [
      {
        game_id: 1,
        notes: "Game was played",
        owner: "steve",
        players: "10",
        sport: "hockey",
        time: "2017-10-04T20:24:30+00:00",
      },
      {
        game_id: 2,
        notes: "Game was played",
        owner: "steve",
        players: "6",
        sport: "lacrosse",
        time: "2017-10-04T12:35:30+00:00",
      },
      {
        game_id: 3,
        notes: "Game was played",
        owner: "steve",
        players: "4",
        sport: "hockey",
        time: "2017-10-14T20:32:30+00:00",
      },
    ],
  },
  {
    group: "H",
    items: [
      {
        game_id: 4,
        notes: "Game was played",
        owner: "henry",
        players: "10",
        sport: "hockey",
        time: "2017-10-04T10:12:30+00:00",
      },
    ],
  },
  {
    group: "J",
    items: [
      {
        game_id: 5,
        notes: "Game was played",
        owner: "john",
        players: "12",
        sport: "soccer",
        time: "2017-10-14T20:34:30+00:00",
      },
    ],
  },
];
const data = [
  {
    notes: "Game was played",
    time: "2017-10-04T20:24:30+00:00",
    sport: "hockey",
    owner: "steve",
    players: "10",
    game_id: 1,
  },
  {
    notes: "Game was played",
    time: "2017-10-04T12:35:30+00:00",
    sport: "lacrosse",
    owner: "steve",
    players: "6",
    game_id: 2,
  },
  {
    notes: "Game was played",
    time: "2017-10-14T20:32:30+00:00",
    sport: "hockey",
    owner: "steve",
    players: "4",
    game_id: 3,
  },
  {
    notes: "Game was played",
    time: "2017-10-04T10:12:30+00:00",
    sport: "hockey",
    owner: "henry",
    players: "10",
    game_id: 4,
  },
  {
    notes: "Game was played",
    time: "2017-10-14T20:34:30+00:00",
    sport: "soccer",
    owner: "john",
    players: "12",
    game_id: 5,
  },
];
