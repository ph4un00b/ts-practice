// class code from a random peep on internet
class GroupBy {
  static letter(arr: any, key: any) {
    return Array.from(
      arr.reduce((map: any, item: any) => {
        const firstLetter = item[key][0].toUpperCase();
        const group = map.get(firstLetter) || { group: firstLetter, items: [] };
        group.items.push(item);
        map.set(firstLetter, group);
        return map;
      }, new Map()),
      ([, value]) => value,
    );
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
